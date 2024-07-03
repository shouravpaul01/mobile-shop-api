import { Types } from "mongoose";

export type TVariant = {
  storage: string;
  colorName: string;
  colorCode: string;
  price: number;
  quantity: number;
  image: string;
  isStock:boolean
};

export type TSpecifications = {
  displaySize: string;
  displayType: string;
  resolution: string;
  batteryCapacity: number;
  fastCharging: boolean;
  wirelessCharging: boolean;
  camera: {
    front: {
      resolution: string;
      features: string[];
    };
    rear: {
      resolution: string;
      features: string[];
    };
  };
  processor: string;
  ram: string;
  os: string;
  connectivity: {
    wifi: string;
    bluetooth: string;
    nfc: boolean;
    usb: string;
  };
  sensors: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  waterResistance: boolean;
  additionalFeatures: string[];
};

export type TProduct = {
  brand: Types.ObjectId;
  model: string;
  releaseDate: Date;
  discount: number;
  variants: TVariant[];
  specifications: string;
  shortDescription: string;
  longDescription: string;
  warranty: string;
  rating?: number | string;
  isDeleted:boolean
};
