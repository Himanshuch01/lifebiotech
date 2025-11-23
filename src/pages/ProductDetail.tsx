import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MedicineDetailView } from '@/components/MedicineDetailView';
import { medicineDetails } from '@/data/medicineDetails';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { Medicine, MedicineForm } from '@/types/medicine';
import SEO from '@/components/SEO';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Fetch product from Supabase using the UUID from the URL
  const { data: medicine, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      if (!id) return null;
      
      // Check if it's a UUID (from Supabase) or a slug/name (from local data)
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
      
      if (isUUID) {
        // Fetch from Supabase by UUID
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) {
          console.error('Product fetch error:', error);
          return null;
        }
        
        // Transform Supabase data to match Medicine interface
        return {
          ...data,
          form: data.form as MedicineForm,
          imageUrl: data.image_url,
          stockQuantity: data.stock,
          manufacturer: 'LifeBiotech Pharmaceuticals', // Default manufacturer
          category: 'General', // Default category
        } as Medicine;
      } else {
        // Try to fetch from Supabase by name
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .ilike('name', id)
          .single();
        
        if (error) {
          console.error('Product fetch by name error:', error);
          return null;
        }
        
        // Transform Supabase data to match Medicine interface
        return {
          ...data,
          form: data.form as MedicineForm,
          imageUrl: data.image_url,
          stockQuantity: data.stock,
          manufacturer: 'LifeBiotech Pharmaceuticals', // Default manufacturer
          category: 'General', // Default category
        } as Medicine;
      }
    },
    enabled: !!id,
  });

  // Get details from local data using product name
  const details = medicine ? medicineDetails[medicine.name] : null;

  const handleAddToCart = () => {
    if (!medicine) return;
    
    addToCart({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      form: medicine.form,
    });

    toast({
      title: "Added to cart",
      description: `${medicine.name} has been added to your cart.`,
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/products')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>
        <div className="text-center">
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!medicine) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/products')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const productUrl = `https://lifebiotech.in/products/${encodeURIComponent(medicine.id)}`;
  const productImage = medicine.imageUrl || 'https://lifebiotech.in/logo.png';

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title={`${medicine.name} - LifeBiotech`}
        description={`Buy ${medicine.name} (${medicine.form}) online from LifeBiotech. ${medicine.composition ? `Composition: ${medicine.composition}. ` : ''}Quality pharmaceutical product manufactured with WHO-GMP and ISO certification. Price: ₹${medicine.price}.`}
        keywords={`${medicine.name}, ${medicine.form}, ${medicine.composition || ''}, buy ${medicine.name} online, ${medicine.name} price, LifeBiotech ${medicine.name}`}
        url={productUrl}
        image={productImage}
        type="product"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: medicine.name,
          description: medicine.composition || `${medicine.name} - ${medicine.form} by LifeBiotech`,
          image: productImage,
          brand: {
            '@type': 'Brand',
            name: 'LifeBiotech',
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'LifeBiotech',
          },
          offers: {
            '@type': 'Offer',
            url: productUrl,
            priceCurrency: 'INR',
            price: typeof medicine.price === 'string' ? parseFloat(medicine.price) : medicine.price,
            availability: (medicine.stockQuantity || medicine.stock || 0) > 0 
              ? 'https://schema.org/InStock' 
              : 'https://schema.org/OutOfStock',
            seller: {
              '@type': 'Organization',
              name: 'LifeBiotech',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: '25',
          },
        }}
      />
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>
      <MedicineDetailView 
        medicine={medicine}
        details={details}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
