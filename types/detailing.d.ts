type LocaleType = 'en' | 'id';

type WorkshopLocationType = 'Jakarta' | 'Bandung';

export interface DetailingServiceType {
  fields: DetailingFieldsType;
  metadata: {
    tags: any[];
  };
  sys: SysType;
}

export interface DetailingFieldsType {
  description: string;
  images: ImageInterface[];
  name: string;
  slug: string;
  subtitle: string;
  thumbnail: ThumbnailType;
}

// ImageInterface START
export interface ImageInterface {
  metadata: Metadata;
  sys: ImageSys;
  fields: Fields;
}

export interface Fields {
  title: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: ImageClass;
}

export interface ImageClass {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface ImageSys {
  space: Environment;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  revision: number;
  locale: string;
}

export interface Environment {
  sys: EnvironmentSys;
}

export interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
}

// ImageInterface END
export interface ThumbnailType {
  metadata: {
    tags: any;
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    locale: LocaleType;
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

interface SysType {
  space: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  revision: number;
  contentType: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  locale: LocaleType;
}
