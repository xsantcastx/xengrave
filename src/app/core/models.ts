export type Material = 'stainless'|'aluminum'|'titanium'|'powdercoat'|'wood'|'acrylic';
export type Finish = 'matte'|'gloss'|'brushed'|'raw';
export type EngravingMethod = 'fiber'|'co2'|'uv';

export interface ProductOption {
  key: string;
  label: string;
  type: 'select'|'radio'|'swatch'|'text'|'number';
  values?: string[];
  required?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  collection: string;
  basePrice: number;
  materials: Material[];
  finishes?: Finish[];
  engraving: EngravingMethod[];
  options: ProductOption[];
  images: string[];
  bestseller?: boolean;
}

export interface QuoteRequest {
  id?: string;
  productId?: string;
  quantity: number;
  material?: Material;
  method?: EngravingMethod;
  complexity: 'simple'|'standard'|'intricate';
  fileUrls?: string[];
  notes?: string;
  customer: { name: string; email: string; phone?: string };
}
