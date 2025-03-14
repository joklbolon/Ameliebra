
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Product } from '@/components/Products';
import { addProduct } from '@/data/products';
import { toast } from 'sonner';

// Create a schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  image: z.string().min(1, { message: "Image path is required." }),
  tag: z.string().min(1, { message: "Tag is required." }),
});

// This type will now have all required fields, matching the Product type
type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  onSuccess?: (product: Product) => void;
}

const ProductForm = ({ onSuccess }: ProductFormProps) => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "/assets/images/products/",
      tag: "New",
    },
  });

  const onSubmit = (values: ProductFormValues) => {
    // Now values is fully typed and matches what addProduct expects
    const newProduct = addProduct(values);
    toast.success(`Product "${values.name}" added successfully`);
    
    if (onSuccess) {
      onSuccess(newProduct);
    }
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter product name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter product description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Path</FormLabel>
              <FormControl>
                <Input placeholder="/assets/images/products/your-image.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tag</FormLabel>
              <FormControl>
                <Input placeholder="New, Bestseller, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button type="submit" className="btn-primary w-full">
          Add Product
        </button>
      </form>
    </Form>
  );
};

export default ProductForm;
