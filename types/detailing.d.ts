type LocaleType = 'en' | 'id';

export interface DetailingServiceType {
  fields: DetailingFieldsType;
  metadata: {
    tags: any[];
  };
  sys: SysType;
}

export interface DetailingFieldsType {
  description: string;
  images: ImageType[];
  name: string;
  slug: string;
  subtitle: string;
  thumbnail: ThumbnailType;
}

export interface ImageType {
  fields: {
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
    title: string;
  };
  metadata: {
    tags: any[];
  };
  sys: any;
}

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
