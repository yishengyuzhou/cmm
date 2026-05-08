export type LocaleCode = 'en' | 'id' | 'ms' | 'th' | 'vi';

export const localeOptions: Array<{ code: LocaleCode; label: string; shortLabel: string }> = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'id', label: 'Bahasa Indonesia', shortLabel: 'ID' },
  { code: 'ms', label: 'Malay', shortLabel: 'MY' },
  { code: 'th', label: 'Thai', shortLabel: 'TH' },
  { code: 'vi', label: 'Vietnamese', shortLabel: 'VI' },
];

export const messages = {
  en: {
    seo: {
      homeTitle: 'Herbal East Supply | Chinese Herbal Ingredients Wholesale',
      homeDescription:
        'Premium Chinese herbal ingredients, bulk herbal products, loose cargo support and OEM herbal drinks for Southeast Asian merchants.',
      productsTitle: 'Products | Herbal Ingredients and Tea Blends',
      productsDescription:
        'Browse raw herbs, herbal tea ingredients, wellness drinks and OEM herbal products for B2B supply.',
      bulkTitle: 'Bulk Supply | Loose Cargo Herbal Products',
      bulkDescription:
        'Bulk shipping, mixed batch orders, carton packing and loose cargo support for Southeast Asian merchants.',
      oemTitle: 'OEM / ODM Herbal Drinks and Tea Bags',
      oemDescription:
        'Private label herbal tea bags, wellness drinks, gift packs and packaging customization for merchant brands.',
      aboutTitle: 'About | Traditional Botanicals and Modern Trade Service',
      aboutDescription:
        'Learn about Herbal East Supply, our sourcing philosophy, batch preparation and export-oriented herbal supply service.',
      contactTitle: 'Contact | Start Your Herbal Wholesale Inquiry',
      contactDescription:
        'Contact Herbal East Supply by email for wholesale pricing, bulk herbal products and OEM inquiry support.',
    },
    nav: {
      home: 'Home',
      products: 'Products',
      bulk: 'Bulk Supply',
      oem: 'OEM / ODM',
      about: 'About',
      contact: 'Contact',
      contactUs: 'Contact Us',
      menu: 'Menu',
      close: 'Close menu',
    },
    common: {
      emailLabel: 'Wholesale Email',
      inquiry: 'Inquiry',
      inquiryByEmail: 'Inquiry by Email',
      contactWholesale: 'Contact for Wholesale',
      viewProducts: 'View Product Catalogue',
      supplyType: 'Supply Type',
      supplyForm: 'Supply Form',
      moq: 'MOQ',
      bulk: 'Bulk',
      looseCargo: 'Loose Cargo',
      packed: 'Packed',
      oem: 'OEM',
      learnMore: 'Learn more',
      emailUs: 'Email us',
    },
    emailPage: {
      seoTitle: 'Wholesale Email | Herbal East Supply',
      seoDescription: 'View the wholesale inquiry email for Herbal East Supply.',
      title: 'Wholesale Contact Email',
      hint: 'Use this email for product lists, wholesale pricing, loose cargo, bulk supply and OEM / ODM discussions.',
      copy: 'Copy Email',
      copied: 'Email Copied',
      openEmailApp: 'Open Email App',
      close: 'Close window',
    },
    home: {
      hero: {
        eyebrow: 'Southeast Asia B2B herbal supply',
        title: 'Premium Chinese Herbal Ingredients for Southeast Asian Wellness Brands',
        subtitle:
          'Bulk supply, loose cargo and OEM herbal drink solutions for merchants, tea brands and wellness retailers across Southeast Asia.',
        highlight: 'Bulk Shipping · Loose Cargo · Herbal Tea · OEM / ODM',
        imageAlt: 'Premium herbal ingredients and tea drink arrangement',
      },
      trust: [
        'Bulk Shipping',
        'Loose Cargo Supported',
        'Herbal Tea & Drinks',
        'OEM / ODM Available',
        'Southeast Asia Trade Friendly',
      ],
      categories: {
        eyebrow: 'Catalogue direction',
        title: 'Product categories built for merchant sourcing',
        description:
          'From loose dried herbs to retail-ready tea blends, each category is shaped for wholesale, trial orders and long-term supply.',
        items: [
          {
            title: 'Raw Herbal Ingredients',
            description: 'Dried botanicals for tea, soup, wellness products and ingredient development.',
            imageKey: 'rawHerbs',
          },
          {
            title: 'Herbal Tea Blends',
            description: 'Flower teas, daily balance blends and lifestyle tea bag concepts.',
            imageKey: 'teaBlend',
          },
          {
            title: 'Wellness Drinks',
            description: 'Botanical drink ideas for cafes, retailers and wellness beverage brands.',
            imageKey: 'wellnessDrink',
          },
          {
            title: 'Sleep & Calm Series',
            description: 'Gentle evening routine blends with traditional botanical ingredients.',
            imageKey: 'sleepCalm',
          },
          {
            title: 'Gift & Retail Packs',
            description: 'Premium pack concepts for seasonal gifting and retail shelves.',
            imageKey: 'giftPack',
          },
          {
            title: 'OEM / Private Label',
            description: 'Custom tea bags, labels and packaging for merchant-owned brands.',
            imageKey: 'oemLabel',
          },
        ],
      },
      featured: {
        eyebrow: 'Popular wholesale items',
        title: 'Featured products for B2B inquiry',
        description:
          'A concise starting list for merchants who need reliable herbal ingredients, tea concepts and flexible supply formats.',
      },
      why: {
        eyebrow: 'Merchant cooperation',
        title: 'Why merchants choose Herbal East Supply',
        description:
          'We focus on practical trade needs: mixed product batches, clear packing options and responsive product discussion.',
        items: [
          'Bulk & mixed cargo support',
          'Flexible packaging',
          'Southeast Asia oriented supply',
          'Stable sourcing',
          'Merchant-friendly cooperation',
          'Fast inquiry response',
        ],
      },
      themes: {
        eyebrow: 'Wellness themes',
        title: 'Lifestyle-oriented herbal directions',
        description:
          'Product language stays gentle and commercially useful, centered on daily routines and traditional botanical culture.',
        items: [
          'Daily Wellness',
          'Calm & Rest',
          'Natural Refreshment',
          'Herbal Tea Lifestyle',
          'Seasonal Care',
        ],
      },
      cta: {
        title: 'Ready for Bulk Herbal Supply?',
        description:
          'Send your product list, target market and estimated quantity. We will help you discuss suitable forms, packaging and wholesale supply options.',
      },
    },
    products: {
      hero: {
        eyebrow: 'Wholesale catalogue',
        title: 'Herbal products for merchants, distributors and wellness retailers',
        description:
          'Filter by product direction and send a quick inquiry for bulk, loose cargo, packed or OEM supply.',
      },
      filters: {
        all: 'All Products',
        raw: 'Raw Herbs',
        tea: 'Tea Ingredients',
        drinks: 'Herbal Drinks',
        calm: 'Sleep & Calm',
        soup: 'Soup & Cooking Herbs',
        oem: 'OEM Products',
      },
      listTitle: 'Product catalogue',
      listDescription:
        'Each item can be discussed for packing style, estimated quantity and merchant trial orders.',
    },
    bulk: {
      hero: {
        eyebrow: 'Batch shipping support',
        title: 'Bulk herbal supply, loose cargo and mixed product batches',
        description:
          'A practical supply route for Southeast Asian wholesalers, herbal stores, wellness studios, tea brands and food traders.',
      },
      optionsTitle: 'Shipping and packing options',
      optionsDescription:
        'Choose the supply format that matches your order size, retail plan and destination market.',
      options: [
        {
          title: 'Loose Cargo',
          description: 'Flexible loose cargo support for merchants testing multiple herbal products.',
          imageKey: 'bulkSupply',
        },
        {
          title: 'Carton Packing',
          description: 'Clean carton packing for dried ingredients, tea bags and retail packs.',
          imageKey: 'cartonPacking',
        },
        {
          title: 'Mixed Product Batch',
          description: 'Combine several SKUs in one batch to build a broader catalogue.',
          imageKey: 'mixedBatch',
        },
        {
          title: 'Retail Pack',
          description: 'Shelf-friendly packs for stores, wellness shops and gifting channels.',
          imageKey: 'giftPack',
        },
        {
          title: 'OEM Pack',
          description: 'Private label packaging discussion for merchant-owned herbal concepts.',
          imageKey: 'oemLabel',
        },
      ],
      fitTitle: 'Suitable for Southeast Asian business channels',
      fitItems: [
        'Herbal ingredient wholesalers',
        'Wellness studios and herbal shops',
        'Tea drink and lifestyle brands',
        'Food import and cross-border traders',
      ],
      processTitle: 'Cooperation process',
      process: [
        'Send inquiry',
        'Confirm product list',
        'Confirm packaging and quantity',
        'Arrange batch shipping',
        'Long-term supply cooperation',
      ],
      ctaTitle: 'Email us for wholesale price',
      ctaDescription:
        'Share your product interest and country. We will discuss product form, packing and batch supply details by email.',
    },
    oem: {
      hero: {
        eyebrow: 'Private label solutions',
        title: 'OEM / ODM herbal tea bags, drinks and wellness packaging',
        description:
          'Develop merchant-ready herbal products with flexible packaging, flavor direction and Southeast Asia market adaptation.',
      },
      solutionsTitle: 'OEM solutions',
      solutionsDescription:
        'Create product concepts suitable for retail shelves, cafes, wellness stores and merchant-owned brands.',
      solutions: [
        'Herbal tea bag customization',
        'Wellness drink concept development',
        'Private label packaging',
        'Southeast Asia flavor adaptation',
        'Gift box and retail pack planning',
        'Merchant brand cooperation',
      ],
      privateTitle: 'Private label options',
      privateDescription:
        'Start with a simple catalogue idea or discuss a fuller product direction for your own brand.',
      privateItems: [
        'Blank label and private brand discussion',
        'Tea bag, loose leaf or bottled drink directions',
        'Box, pouch, jar and gift pack options',
        'Trial batch support before larger cooperation',
      ],
      formulaTitle: 'Herbal formula directions',
      formulaNote:
        'These are lifestyle product directions, not medical treatment claims. They help merchants position daily herbal routines safely.',
      formulas: ['Calm & Rest', 'Daily Balance', 'Refreshing Herbal Tea', 'Women’s Wellness', 'Seasonal Care'],
      ctaTitle: 'Plan your OEM herbal product',
      ctaDescription:
        'Email your market, target customer and preferred product type. We can discuss a suitable private label direction.',
    },
    about: {
      hero: {
        eyebrow: 'About the supply partner',
        title: 'Traditional botanical culture with modern cross-border trade service',
        description:
          'Herbal East Supply helps Southeast Asian merchants source Chinese herbal ingredients, tea blends and wellness product concepts with practical B2B support.',
      },
      storyTitle: 'Supply philosophy',
      story:
        'We work around dependable sourcing, clear packaging communication and long-term merchant cooperation. Our catalogue is built for brands and traders who need botanical ingredients for tea, soup, daily wellness and retail product development.',
      marketTitle: 'Designed for Southeast Asian trade',
      market:
        'Product discussions consider flexible quantities, mixed batches, loose cargo and retail-ready formats so merchants can test demand before scaling.',
      qualityTitle: 'Quality control flow',
      qualityDescription:
        'Every order can be discussed through a clear preparation flow, from source selection to export preparation.',
      quality: ['Source selection', 'Drying and sorting', 'Packaging', 'Batch inspection', 'Export preparation'],
    },
    contact: {
      hero: {
        eyebrow: 'Wholesale inquiry',
        title: 'Start Your Herbal Wholesale Inquiry',
        description:
          'Tell us your country, product interest and estimated quantity. For the fastest response, email us directly.',
      },
      formTitle: 'Inquiry form preview',
      formDescription:
        'This front-end form helps you organize inquiry details. Please email the information directly for a faster reply.',
      fields: {
        name: 'Name',
        company: 'Company',
        country: 'Country',
        productInterest: 'Product Interest',
        estimatedQuantity: 'Estimated Quantity',
        message: 'Message',
      },
      placeholders: {
        name: 'Your name',
        company: 'Company or store name',
        country: 'Country / region',
        productInterest: 'Goji berry, herbal tea, OEM drinks...',
        estimatedQuantity: 'Trial order, cartons, mixed batch...',
        message: 'Share packing needs, target market or questions',
      },
      submit: 'Submit Inquiry',
      success:
        'Thank you. Please email us directly at {email} for a faster response.',
      bottomNote: 'For product list, wholesale price and OEM discussion, contact:',
    },
    footer: {
      tagline:
        'Premium Chinese herbal ingredients, tea blends and OEM supply support for Southeast Asian merchants.',
      sections: {
        catalogue: 'Catalogue',
        company: 'Company',
        contact: 'Contact',
      },
      notice:
        'Product descriptions are for traditional botanical lifestyle and merchant supply reference only. They are not medical treatment claims.',
      rights: 'All rights reserved.',
    },
  },
  id: {
    seo: {
      homeTitle: 'Herbal East Supply | Grosir Bahan Herbal China',
      homeDescription:
        'Bahan herbal China premium, produk herbal curah, dukungan loose cargo, dan solusi minuman herbal OEM untuk merchant Asia Tenggara.',
      productsTitle: 'Produk | Bahan Herbal dan Campuran Teh',
      productsDescription:
        'Lihat bahan herbal mentah, bahan teh herbal, minuman wellness, dan produk herbal OEM untuk pasokan B2B.',
      bulkTitle: 'Pasokan Curah | Produk Herbal Loose Cargo',
      bulkDescription:
        'Pengiriman curah, pesanan campuran, packing karton, dan dukungan loose cargo untuk merchant Asia Tenggara.',
      oemTitle: 'OEM / ODM Minuman Herbal dan Teh Celup',
      oemDescription:
        'Teh celup private label, minuman wellness, gift pack, dan kustomisasi kemasan untuk brand merchant.',
      aboutTitle: 'Tentang Kami | Botanikal Tradisional dan Layanan Dagang Modern',
      aboutDescription:
        'Kenali Herbal East Supply, filosofi sourcing, persiapan batch, dan layanan pasokan herbal untuk ekspor.',
      contactTitle: 'Kontak | Mulai Inquiry Grosir Herbal',
      contactDescription:
        'Hubungi Herbal East Supply melalui email untuk harga grosir, produk herbal curah, dan inquiry OEM.',
    },
    nav: {
      home: 'Home',
      products: 'Produk',
      bulk: 'Pasokan Curah',
      oem: 'OEM / ODM',
      about: 'Tentang',
      contact: 'Kontak',
      contactUs: 'Hubungi Kami',
      menu: 'Menu',
      close: 'Tutup menu',
    },
    common: {
      emailLabel: 'Email Grosir',
      inquiry: 'Inquiry',
      inquiryByEmail: 'Inquiry via Email',
      contactWholesale: 'Hubungi untuk Grosir',
      viewProducts: 'Lihat Katalog Produk',
      supplyType: 'Tipe Pasokan',
      supplyForm: 'Bentuk Pasokan',
      moq: 'MOQ',
      bulk: 'Curah',
      looseCargo: 'Loose Cargo',
      packed: 'Kemasan',
      oem: 'OEM',
      learnMore: 'Pelajari',
      emailUs: 'Email kami',
    },
    emailPage: {
      seoTitle: 'Email Grosir | Herbal East Supply',
      seoDescription: 'Lihat email inquiry grosir untuk Herbal East Supply.',
      title: 'Email Kontak Grosir',
      hint: 'Gunakan email ini untuk daftar produk, harga grosir, loose cargo, pasokan curah, dan diskusi OEM / ODM.',
      copy: 'Salin Email',
      copied: 'Email Disalin',
      openEmailApp: 'Buka Aplikasi Email',
      close: 'Tutup jendela',
    },
    home: {
      hero: {
        eyebrow: 'Pasokan herbal B2B Asia Tenggara',
        title: 'Bahan Herbal China Premium untuk Brand Wellness Asia Tenggara',
        subtitle:
          'Solusi pasokan curah, loose cargo, dan minuman herbal OEM untuk merchant, brand teh, dan retailer wellness di Asia Tenggara.',
        highlight: 'Bulk Shipping · Loose Cargo · Herbal Tea · OEM / ODM',
        imageAlt: 'Susunan bahan herbal premium dan minuman teh',
      },
      trust: [
        'Pengiriman Curah',
        'Mendukung Loose Cargo',
        'Teh & Minuman Herbal',
        'OEM / ODM Tersedia',
        'Ramah Dagang Asia Tenggara',
      ],
      categories: {
        eyebrow: 'Arah katalog',
        title: 'Kategori produk untuk kebutuhan sourcing merchant',
        description:
          'Dari herbal kering loose hingga campuran teh siap retail, setiap kategori dibuat untuk grosir, trial order, dan pasokan jangka panjang.',
        items: [
          {
            title: 'Bahan Herbal Mentah',
            description: 'Botanikal kering untuk teh, sup, produk wellness, dan pengembangan bahan.',
            imageKey: 'rawHerbs',
          },
          {
            title: 'Campuran Teh Herbal',
            description: 'Teh bunga, daily balance blend, dan konsep teh celup lifestyle.',
            imageKey: 'teaBlend',
          },
          {
            title: 'Minuman Wellness',
            description: 'Ide minuman botanikal untuk kafe, retailer, dan brand minuman wellness.',
            imageKey: 'wellnessDrink',
          },
          {
            title: 'Seri Sleep & Calm',
            description: 'Blend rutinitas malam yang lembut dengan bahan botanikal tradisional.',
            imageKey: 'sleepCalm',
          },
          {
            title: 'Gift & Retail Packs',
            description: 'Konsep kemasan premium untuk hadiah musiman dan rak retail.',
            imageKey: 'giftPack',
          },
          {
            title: 'OEM / Private Label',
            description: 'Teh celup, label, dan kemasan custom untuk brand milik merchant.',
            imageKey: 'oemLabel',
          },
        ],
      },
      featured: {
        eyebrow: 'Item grosir populer',
        title: 'Produk unggulan untuk inquiry B2B',
        description:
          'Daftar awal yang praktis untuk merchant yang membutuhkan bahan herbal, konsep teh, dan format pasokan fleksibel.',
      },
      why: {
        eyebrow: 'Kerja sama merchant',
        title: 'Mengapa merchant memilih Herbal East Supply',
        description:
          'Kami fokus pada kebutuhan dagang nyata: batch produk campuran, opsi packing jelas, dan diskusi produk yang responsif.',
        items: [
          'Dukungan curah & mixed cargo',
          'Kemasan fleksibel',
          'Berorientasi Asia Tenggara',
          'Sourcing stabil',
          'Kerja sama ramah merchant',
          'Respons inquiry cepat',
        ],
      },
      themes: {
        eyebrow: 'Tema wellness',
        title: 'Arah herbal berbasis lifestyle',
        description:
          'Bahasa produk tetap lembut dan berguna secara komersial, berpusat pada rutinitas harian dan budaya botanikal tradisional.',
        items: ['Daily Wellness', 'Calm & Rest', 'Natural Refreshment', 'Herbal Tea Lifestyle', 'Seasonal Care'],
      },
      cta: {
        title: 'Siap untuk Pasokan Herbal Curah?',
        description:
          'Kirim daftar produk, target pasar, dan estimasi kuantitas. Kami akan membantu membahas bentuk, kemasan, dan opsi pasokan grosir.',
      },
    },
    products: {
      hero: {
        eyebrow: 'Katalog grosir',
        title: 'Produk herbal untuk merchant, distributor, dan retailer wellness',
        description:
          'Filter berdasarkan arah produk dan kirim inquiry cepat untuk pasokan curah, loose cargo, kemasan, atau OEM.',
      },
      filters: {
        all: 'Semua Produk',
        raw: 'Raw Herbs',
        tea: 'Bahan Teh',
        drinks: 'Minuman Herbal',
        calm: 'Sleep & Calm',
        soup: 'Herbal Sup & Masak',
        oem: 'Produk OEM',
      },
      listTitle: 'Katalog produk',
      listDescription:
        'Setiap item dapat didiskusikan untuk gaya packing, estimasi kuantitas, dan trial order merchant.',
    },
    bulk: {
      hero: {
        eyebrow: 'Dukungan pengiriman batch',
        title: 'Pasokan herbal curah, loose cargo, dan batch produk campuran',
        description:
          'Rute pasokan praktis untuk grosir Asia Tenggara, toko herbal, studio wellness, brand teh, dan trader makanan.',
      },
      optionsTitle: 'Opsi pengiriman dan packing',
      optionsDescription:
        'Pilih format pasokan yang cocok dengan ukuran order, rencana retail, dan pasar tujuan Anda.',
      options: [
        {
          title: 'Loose Cargo',
          description: 'Dukungan loose cargo fleksibel untuk merchant yang menguji beberapa produk herbal.',
          imageKey: 'bulkSupply',
        },
        {
          title: 'Packing Karton',
          description: 'Packing karton rapi untuk bahan kering, teh celup, dan retail pack.',
          imageKey: 'cartonPacking',
        },
        {
          title: 'Batch Produk Campuran',
          description: 'Gabungkan beberapa SKU dalam satu batch untuk membangun katalog lebih luas.',
          imageKey: 'mixedBatch',
        },
        {
          title: 'Retail Pack',
          description: 'Paket ramah rak untuk toko, wellness shop, dan channel gifting.',
          imageKey: 'giftPack',
        },
        {
          title: 'OEM Pack',
          description: 'Diskusi kemasan private label untuk konsep herbal milik merchant.',
          imageKey: 'oemLabel',
        },
      ],
      fitTitle: 'Cocok untuk channel bisnis Asia Tenggara',
      fitItems: [
        'Grosir bahan herbal',
        'Studio wellness dan toko herbal',
        'Brand teh dan lifestyle',
        'Importir makanan dan trader lintas negara',
      ],
      processTitle: 'Proses kerja sama',
      process: [
        'Kirim inquiry',
        'Konfirmasi daftar produk',
        'Konfirmasi kemasan dan kuantitas',
        'Atur pengiriman batch',
        'Kerja sama pasokan jangka panjang',
      ],
      ctaTitle: 'Email kami untuk harga grosir',
      ctaDescription:
        'Bagikan minat produk dan negara Anda. Kami akan membahas bentuk produk, packing, dan detail pasokan batch melalui email.',
    },
    oem: {
      hero: {
        eyebrow: 'Solusi private label',
        title: 'OEM / ODM teh celup herbal, minuman, dan kemasan wellness',
        description:
          'Kembangkan produk herbal siap merchant dengan kemasan fleksibel, arah rasa, dan adaptasi pasar Asia Tenggara.',
      },
      solutionsTitle: 'Solusi OEM',
      solutionsDescription:
        'Buat konsep produk yang cocok untuk rak retail, kafe, toko wellness, dan brand milik merchant.',
      solutions: [
        'Kustomisasi teh celup herbal',
        'Pengembangan konsep minuman wellness',
        'Kemasan private label',
        'Adaptasi rasa Asia Tenggara',
        'Perencanaan gift box dan retail pack',
        'Kerja sama brand merchant',
      ],
      privateTitle: 'Opsi private label',
      privateDescription:
        'Mulai dari ide katalog sederhana atau diskusikan arah produk yang lebih lengkap untuk brand Anda.',
      privateItems: [
        'Diskusi label kosong dan brand privat',
        'Arah teh celup, loose leaf, atau minuman botol',
        'Opsi box, pouch, jar, dan gift pack',
        'Dukungan trial batch sebelum kerja sama lebih besar',
      ],
      formulaTitle: 'Arah formula herbal',
      formulaNote:
        'Ini adalah arah produk lifestyle, bukan klaim perawatan medis. Arah ini membantu merchant memposisikan rutinitas herbal harian dengan aman.',
      formulas: ['Calm & Rest', 'Daily Balance', 'Refreshing Herbal Tea', 'Women’s Wellness', 'Seasonal Care'],
      ctaTitle: 'Rencanakan produk herbal OEM Anda',
      ctaDescription:
        'Email pasar, target pelanggan, dan tipe produk pilihan Anda. Kami dapat membahas arah private label yang sesuai.',
    },
    about: {
      hero: {
        eyebrow: 'Tentang partner pasokan',
        title: 'Budaya botanikal tradisional dengan layanan dagang modern',
        description:
          'Herbal East Supply membantu merchant Asia Tenggara mencari bahan herbal China, campuran teh, dan konsep produk wellness dengan dukungan B2B praktis.',
      },
      storyTitle: 'Filosofi pasokan',
      story:
        'Kami berfokus pada sourcing yang dapat diandalkan, komunikasi kemasan yang jelas, dan kerja sama merchant jangka panjang. Katalog kami dibuat untuk brand dan trader yang membutuhkan bahan botanikal untuk teh, sup, daily wellness, dan pengembangan produk retail.',
      marketTitle: 'Dirancang untuk dagang Asia Tenggara',
      market:
        'Diskusi produk mempertimbangkan kuantitas fleksibel, batch campuran, loose cargo, dan format siap retail agar merchant dapat menguji permintaan sebelum scale up.',
      qualityTitle: 'Alur kontrol kualitas',
      qualityDescription:
        'Setiap order dapat dibahas melalui alur persiapan yang jelas, dari pemilihan sumber hingga persiapan ekspor.',
      quality: ['Pemilihan sumber', 'Pengeringan dan sorting', 'Kemasan', 'Inspeksi batch', 'Persiapan ekspor'],
    },
    contact: {
      hero: {
        eyebrow: 'Inquiry grosir',
        title: 'Mulai Inquiry Grosir Herbal Anda',
        description:
          'Beri tahu negara, minat produk, dan estimasi kuantitas. Untuk respons tercepat, email kami langsung.',
      },
      formTitle: 'Preview form inquiry',
      formDescription:
        'Form front-end ini membantu menyusun detail inquiry. Silakan email informasinya langsung untuk balasan lebih cepat.',
      fields: {
        name: 'Nama',
        company: 'Perusahaan',
        country: 'Negara',
        productInterest: 'Minat Produk',
        estimatedQuantity: 'Estimasi Kuantitas',
        message: 'Pesan',
      },
      placeholders: {
        name: 'Nama Anda',
        company: 'Nama perusahaan atau toko',
        country: 'Negara / wilayah',
        productInterest: 'Goji berry, teh herbal, minuman OEM...',
        estimatedQuantity: 'Trial order, karton, batch campuran...',
        message: 'Bagikan kebutuhan packing, target pasar, atau pertanyaan',
      },
      submit: 'Kirim Inquiry',
      success:
        'Terima kasih. Silakan email kami langsung di {email} untuk respons lebih cepat.',
      bottomNote: 'Untuk daftar produk, harga grosir, dan diskusi OEM, hubungi:',
    },
    footer: {
      tagline:
        'Bahan herbal China premium, campuran teh, dan dukungan pasokan OEM untuk merchant Asia Tenggara.',
      sections: {
        catalogue: 'Katalog',
        company: 'Perusahaan',
        contact: 'Kontak',
      },
      notice:
        'Deskripsi produk hanya untuk referensi lifestyle botanikal tradisional dan pasokan merchant. Bukan klaim perawatan medis.',
      rights: 'Hak cipta dilindungi.',
    },
  },
  ms: {
    seo: {
      homeTitle: 'Herbal East Supply | Pemborong Bahan Herba Cina',
      homeDescription:
        'Bahan herba Cina premium, produk herba pukal, sokongan loose cargo dan penyelesaian minuman herba OEM untuk peniaga Asia Tenggara.',
      productsTitle: 'Produk | Bahan Herba dan Campuran Teh',
      productsDescription:
        'Lihat herba mentah, bahan teh herba, minuman wellness dan produk herba OEM untuk bekalan B2B.',
      bulkTitle: 'Bekalan Pukal | Produk Herba Loose Cargo',
      bulkDescription:
        'Penghantaran pukal, pesanan campuran, pembungkusan karton dan sokongan loose cargo untuk peniaga Asia Tenggara.',
      oemTitle: 'OEM / ODM Minuman Herba dan Uncang Teh',
      oemDescription:
        'Uncang teh private label, minuman wellness, pek hadiah dan penyesuaian pembungkusan untuk jenama peniaga.',
      aboutTitle: 'Tentang Kami | Botani Tradisional dan Servis Dagangan Moden',
      aboutDescription:
        'Ketahui tentang Herbal East Supply, falsafah sumber, persediaan batch dan servis bekalan herba berorientasi eksport.',
      contactTitle: 'Hubungi | Mulakan Pertanyaan Borong Herba',
      contactDescription:
        'Hubungi Herbal East Supply melalui email untuk harga borong, produk herba pukal dan sokongan pertanyaan OEM.',
    },
    nav: {
      home: 'Home',
      products: 'Produk',
      bulk: 'Bekalan Pukal',
      oem: 'OEM / ODM',
      about: 'Tentang',
      contact: 'Hubungi',
      contactUs: 'Hubungi Kami',
      menu: 'Menu',
      close: 'Tutup menu',
    },
    common: {
      emailLabel: 'Email Borong',
      inquiry: 'Pertanyaan',
      inquiryByEmail: 'Pertanyaan melalui Email',
      contactWholesale: 'Hubungi untuk Borong',
      viewProducts: 'Lihat Katalog Produk',
      supplyType: 'Jenis Bekalan',
      supplyForm: 'Bentuk Bekalan',
      moq: 'MOQ',
      bulk: 'Pukal',
      looseCargo: 'Loose Cargo',
      packed: 'Berbungkus',
      oem: 'OEM',
      learnMore: 'Ketahui lagi',
      emailUs: 'Email kami',
    },
    emailPage: {
      seoTitle: 'Email Borong | Herbal East Supply',
      seoDescription: 'Lihat email pertanyaan borong untuk Herbal East Supply.',
      title: 'Email Kontak Borong',
      hint: 'Gunakan email ini untuk senarai produk, harga borong, loose cargo, bekalan pukal dan perbincangan OEM / ODM.',
      copy: 'Salin Email',
      copied: 'Email Disalin',
      openEmailApp: 'Buka Aplikasi Email',
      close: 'Tutup tetingkap',
    },
    home: {
      hero: {
        eyebrow: 'Bekalan herba B2B Asia Tenggara',
        title: 'Bahan Herba Cina Premium untuk Jenama Wellness Asia Tenggara',
        subtitle:
          'Penyelesaian bekalan pukal, loose cargo dan minuman herba OEM untuk peniaga, jenama teh dan peruncit wellness di Asia Tenggara.',
        highlight: 'Bulk Shipping · Loose Cargo · Herbal Tea · OEM / ODM',
        imageAlt: 'Susunan bahan herba premium dan minuman teh',
      },
      trust: [
        'Penghantaran Pukal',
        'Sokongan Loose Cargo',
        'Teh & Minuman Herba',
        'OEM / ODM Tersedia',
        'Mesra Dagangan Asia Tenggara',
      ],
      categories: {
        eyebrow: 'Arah katalog',
        title: 'Kategori produk untuk sumber peniaga',
        description:
          'Daripada herba kering loose kepada campuran teh sedia retail, setiap kategori sesuai untuk borong, trial order dan bekalan jangka panjang.',
        items: [
          {
            title: 'Bahan Herba Mentah',
            description: 'Botani kering untuk teh, sup, produk wellness dan pembangunan bahan.',
            imageKey: 'rawHerbs',
          },
          {
            title: 'Campuran Teh Herba',
            description: 'Teh bunga, daily balance blend dan konsep uncang teh lifestyle.',
            imageKey: 'teaBlend',
          },
          {
            title: 'Minuman Wellness',
            description: 'Idea minuman botani untuk kafe, peruncit dan jenama minuman wellness.',
            imageKey: 'wellnessDrink',
          },
          {
            title: 'Siri Sleep & Calm',
            description: 'Blend rutin malam yang lembut dengan bahan botani tradisional.',
            imageKey: 'sleepCalm',
          },
          {
            title: 'Pek Hadiah & Retail',
            description: 'Konsep pek premium untuk hadiah bermusim dan rak retail.',
            imageKey: 'giftPack',
          },
          {
            title: 'OEM / Private Label',
            description: 'Uncang teh, label dan pembungkusan custom untuk jenama peniaga.',
            imageKey: 'oemLabel',
          },
        ],
      },
      featured: {
        eyebrow: 'Item borong popular',
        title: 'Produk pilihan untuk pertanyaan B2B',
        description:
          'Senarai awal yang ringkas untuk peniaga yang memerlukan bahan herba, konsep teh dan format bekalan fleksibel.',
      },
      why: {
        eyebrow: 'Kerjasama peniaga',
        title: 'Mengapa peniaga memilih Herbal East Supply',
        description:
          'Kami fokus kepada keperluan dagangan praktikal: batch produk campuran, pilihan packing jelas dan respons perbincangan produk.',
        items: [
          'Sokongan pukal & mixed cargo',
          'Pembungkusan fleksibel',
          'Berorientasi Asia Tenggara',
          'Sumber stabil',
          'Kerjasama mesra peniaga',
          'Respons pertanyaan pantas',
        ],
      },
      themes: {
        eyebrow: 'Tema wellness',
        title: 'Arah herba berasaskan lifestyle',
        description:
          'Bahasa produk kekal lembut dan berguna secara komersial, berpusat pada rutin harian dan budaya botani tradisional.',
        items: ['Daily Wellness', 'Calm & Rest', 'Natural Refreshment', 'Herbal Tea Lifestyle', 'Seasonal Care'],
      },
      cta: {
        title: 'Bersedia untuk Bekalan Herba Pukal?',
        description:
          'Hantar senarai produk, pasaran sasaran dan anggaran kuantiti. Kami akan bantu membincangkan bentuk, pembungkusan dan pilihan bekalan borong.',
      },
    },
    products: {
      hero: {
        eyebrow: 'Katalog borong',
        title: 'Produk herba untuk peniaga, pengedar dan peruncit wellness',
        description:
          'Tapis mengikut arah produk dan hantar pertanyaan ringkas untuk bekalan pukal, loose cargo, berbungkus atau OEM.',
      },
      filters: {
        all: 'Semua Produk',
        raw: 'Raw Herbs',
        tea: 'Bahan Teh',
        drinks: 'Minuman Herba',
        calm: 'Sleep & Calm',
        soup: 'Herba Sup & Masakan',
        oem: 'Produk OEM',
      },
      listTitle: 'Katalog produk',
      listDescription:
        'Setiap item boleh dibincangkan untuk gaya packing, anggaran kuantiti dan trial order peniaga.',
    },
    bulk: {
      hero: {
        eyebrow: 'Sokongan penghantaran batch',
        title: 'Bekalan herba pukal, loose cargo dan batch produk campuran',
        description:
          'Laluan bekalan praktikal untuk pemborong Asia Tenggara, kedai herba, studio wellness, jenama teh dan peniaga makanan.',
      },
      optionsTitle: 'Pilihan penghantaran dan packing',
      optionsDescription:
        'Pilih format bekalan yang sesuai dengan saiz order, rancangan retail dan pasaran destinasi.',
      options: [
        {
          title: 'Loose Cargo',
          description: 'Sokongan loose cargo fleksibel untuk peniaga menguji beberapa produk herba.',
          imageKey: 'bulkSupply',
        },
        {
          title: 'Packing Karton',
          description: 'Packing karton kemas untuk bahan kering, uncang teh dan retail pack.',
          imageKey: 'cartonPacking',
        },
        {
          title: 'Batch Produk Campuran',
          description: 'Gabungkan beberapa SKU dalam satu batch untuk membina katalog lebih luas.',
          imageKey: 'mixedBatch',
        },
        {
          title: 'Retail Pack',
          description: 'Pek mesra rak untuk kedai, wellness shop dan saluran hadiah.',
          imageKey: 'giftPack',
        },
        {
          title: 'OEM Pack',
          description: 'Perbincangan pembungkusan private label untuk konsep herba milik peniaga.',
          imageKey: 'oemLabel',
        },
      ],
      fitTitle: 'Sesuai untuk saluran bisnes Asia Tenggara',
      fitItems: [
        'Pemborong bahan herba',
        'Studio wellness dan kedai herba',
        'Jenama teh dan lifestyle',
        'Pengimport makanan dan trader rentas sempadan',
      ],
      processTitle: 'Proses kerjasama',
      process: [
        'Hantar pertanyaan',
        'Sahkan senarai produk',
        'Sahkan pembungkusan dan kuantiti',
        'Atur penghantaran batch',
        'Kerjasama bekalan jangka panjang',
      ],
      ctaTitle: 'Email kami untuk harga borong',
      ctaDescription:
        'Kongsi minat produk dan negara anda. Kami akan bincang bentuk produk, packing dan butiran bekalan batch melalui email.',
    },
    oem: {
      hero: {
        eyebrow: 'Penyelesaian private label',
        title: 'OEM / ODM uncang teh herba, minuman dan pembungkusan wellness',
        description:
          'Bangunkan produk herba sedia peniaga dengan pembungkusan fleksibel, arah rasa dan adaptasi pasaran Asia Tenggara.',
      },
      solutionsTitle: 'Penyelesaian OEM',
      solutionsDescription:
        'Cipta konsep produk sesuai untuk rak retail, kafe, kedai wellness dan jenama milik peniaga.',
      solutions: [
        'Kustom uncang teh herba',
        'Pembangunan konsep minuman wellness',
        'Pembungkusan private label',
        'Adaptasi rasa Asia Tenggara',
        'Perancangan gift box dan retail pack',
        'Kerjasama jenama peniaga',
      ],
      privateTitle: 'Pilihan private label',
      privateDescription:
        'Mulakan dengan idea katalog ringkas atau bincangkan arah produk yang lebih lengkap untuk jenama anda.',
      privateItems: [
        'Perbincangan label kosong dan jenama privat',
        'Arah uncang teh, loose leaf atau minuman botol',
        'Pilihan box, pouch, jar dan gift pack',
        'Sokongan trial batch sebelum kerjasama lebih besar',
      ],
      formulaTitle: 'Arah formula herba',
      formulaNote:
        'Ini ialah arah produk lifestyle, bukan tuntutan rawatan perubatan. Ia membantu peniaga memposisikan rutin herba harian dengan selamat.',
      formulas: ['Calm & Rest', 'Daily Balance', 'Refreshing Herbal Tea', 'Women’s Wellness', 'Seasonal Care'],
      ctaTitle: 'Rancang produk herba OEM anda',
      ctaDescription:
        'Email pasaran, pelanggan sasaran dan jenis produk pilihan anda. Kami boleh bincang arah private label yang sesuai.',
    },
    about: {
      hero: {
        eyebrow: 'Tentang partner bekalan',
        title: 'Budaya botani tradisional dengan servis dagangan rentas sempadan moden',
        description:
          'Herbal East Supply membantu peniaga Asia Tenggara mendapatkan bahan herba Cina, campuran teh dan konsep produk wellness dengan sokongan B2B praktikal.',
      },
      storyTitle: 'Falsafah bekalan',
      story:
        'Kami bekerja berdasarkan sumber yang boleh dipercayai, komunikasi pembungkusan yang jelas dan kerjasama peniaga jangka panjang. Katalog kami dibina untuk jenama dan trader yang memerlukan bahan botani untuk teh, sup, daily wellness dan pembangunan produk retail.',
      marketTitle: 'Direka untuk dagangan Asia Tenggara',
      market:
        'Perbincangan produk mempertimbangkan kuantiti fleksibel, batch campuran, loose cargo dan format sedia retail supaya peniaga boleh menguji permintaan sebelum berkembang.',
      qualityTitle: 'Aliran kawalan kualiti',
      qualityDescription:
        'Setiap order boleh dibincangkan melalui aliran persediaan yang jelas, daripada pemilihan sumber hingga persediaan eksport.',
      quality: ['Pemilihan sumber', 'Pengeringan dan sorting', 'Pembungkusan', 'Pemeriksaan batch', 'Persediaan eksport'],
    },
    contact: {
      hero: {
        eyebrow: 'Pertanyaan borong',
        title: 'Mulakan Pertanyaan Borong Herba Anda',
        description:
          'Beritahu negara, minat produk dan anggaran kuantiti. Untuk respons terpantas, email kami terus.',
      },
      formTitle: 'Preview borang pertanyaan',
      formDescription:
        'Borang front-end ini membantu menyusun butiran pertanyaan. Sila email maklumat tersebut terus untuk balasan lebih pantas.',
      fields: {
        name: 'Nama',
        company: 'Syarikat',
        country: 'Negara',
        productInterest: 'Minat Produk',
        estimatedQuantity: 'Anggaran Kuantiti',
        message: 'Mesej',
      },
      placeholders: {
        name: 'Nama anda',
        company: 'Nama syarikat atau kedai',
        country: 'Negara / wilayah',
        productInterest: 'Goji berry, teh herba, minuman OEM...',
        estimatedQuantity: 'Trial order, karton, batch campuran...',
        message: 'Kongsi keperluan packing, pasaran sasaran atau soalan',
      },
      submit: 'Hantar Pertanyaan',
      success:
        'Terima kasih. Sila email kami terus di {email} untuk respons lebih pantas.',
      bottomNote: 'Untuk senarai produk, harga borong dan perbincangan OEM, hubungi:',
    },
    footer: {
      tagline:
        'Bahan herba Cina premium, campuran teh dan sokongan bekalan OEM untuk peniaga Asia Tenggara.',
      sections: {
        catalogue: 'Katalog',
        company: 'Syarikat',
        contact: 'Hubungi',
      },
      notice:
        'Deskripsi produk hanya untuk rujukan lifestyle botani tradisional dan bekalan peniaga. Ia bukan tuntutan rawatan perubatan.',
      rights: 'Hak cipta terpelihara.',
    },
  },
  th: {
    seo: {
      homeTitle: 'Herbal East Supply | ขายส่งสมุนไพรจีน',
      homeDescription:
        'วัตถุดิบสมุนไพรจีนพรีเมียม สินค้าสมุนไพรแบบ Bulk รองรับ Loose Cargo และโซลูชันเครื่องดื่มสมุนไพร OEM สำหรับผู้ค้าในเอเชียตะวันออกเฉียงใต้',
      productsTitle: 'สินค้า | วัตถุดิบสมุนไพรและชาสมุนไพร',
      productsDescription:
        'เลือกดูสมุนไพรแห้ง วัตถุดิบชาสมุนไพร เครื่องดื่ม wellness และสินค้า OEM สำหรับ B2B',
      bulkTitle: 'Bulk Supply | สมุนไพร Loose Cargo',
      bulkDescription:
        'รองรับการส่งแบบ Bulk ออเดอร์ผสม บรรจุกล่อง และ Loose Cargo สำหรับผู้ค้าในเอเชียตะวันออกเฉียงใต้',
      oemTitle: 'OEM / ODM เครื่องดื่มสมุนไพรและชาซอง',
      oemDescription:
        'ชาซอง private label เครื่องดื่ม wellness ชุดของขวัญ และการปรับแต่งบรรจุภัณฑ์สำหรับแบรนด์ผู้ค้า',
      aboutTitle: 'เกี่ยวกับเรา | พฤกษศาสตร์ดั้งเดิมและบริการการค้าสมัยใหม่',
      aboutDescription:
        'รู้จัก Herbal East Supply แนวคิดการจัดหา การเตรียม batch และบริการ supply สมุนไพรเพื่อการส่งออก',
      contactTitle: 'ติดต่อ | เริ่มสอบถามราคาขายส่งสมุนไพร',
      contactDescription:
        'ติดต่อ Herbal East Supply ทางอีเมลสำหรับราคาขายส่ง สินค้าสมุนไพร Bulk และคำถาม OEM',
    },
    nav: {
      home: 'Home',
      products: 'Products',
      bulk: 'Bulk Supply',
      oem: 'OEM / ODM',
      about: 'About',
      contact: 'Contact',
      contactUs: 'Contact Us',
      menu: 'เมนู',
      close: 'ปิดเมนู',
    },
    common: {
      emailLabel: 'อีเมลขายส่ง',
      inquiry: 'Inquiry',
      inquiryByEmail: 'Inquiry by Email',
      contactWholesale: 'ติดต่อขายส่ง',
      viewProducts: 'ดูแคตตาล็อก',
      supplyType: 'ประเภท Supply',
      supplyForm: 'รูปแบบสินค้า',
      moq: 'MOQ',
      bulk: 'Bulk',
      looseCargo: 'Loose Cargo',
      packed: 'Packed',
      oem: 'OEM',
      learnMore: 'ดูเพิ่มเติม',
      emailUs: 'ส่งอีเมล',
    },
    emailPage: {
      seoTitle: 'อีเมลขายส่ง | Herbal East Supply',
      seoDescription: 'ดูอีเมลสำหรับ wholesale inquiry ของ Herbal East Supply',
      title: 'อีเมลติดต่อขายส่ง',
      hint: 'ใช้อีเมลนี้สำหรับรายการสินค้า ราคาขายส่ง loose cargo, bulk supply และการพูดคุย OEM / ODM',
      copy: 'คัดลอกอีเมล',
      copied: 'คัดลอกแล้ว',
      openEmailApp: 'เปิดแอปอีเมล',
      close: 'ปิดหน้าต่าง',
    },
    home: {
      hero: {
        eyebrow: 'สมุนไพร B2B สำหรับเอเชียตะวันออกเฉียงใต้',
        title: 'วัตถุดิบสมุนไพรจีนพรีเมียมสำหรับแบรนด์ Wellness ในเอเชียตะวันออกเฉียงใต้',
        subtitle:
          'โซลูชัน Bulk supply, loose cargo และเครื่องดื่มสมุนไพร OEM สำหรับผู้ค้า แบรนด์ชา และร้าน wellness ทั่วภูมิภาค',
        highlight: 'Bulk Shipping · Loose Cargo · Herbal Tea · OEM / ODM',
        imageAlt: 'ภาพวัตถุดิบสมุนไพรพรีเมียมและเครื่องดื่มชา',
      },
      trust: [
        'Bulk Shipping',
        'รองรับ Loose Cargo',
        'ชาและเครื่องดื่มสมุนไพร',
        'รองรับ OEM / ODM',
        'เหมาะกับการค้าเอเชียตะวันออกเฉียงใต้',
      ],
      categories: {
        eyebrow: 'แนวทางแคตตาล็อก',
        title: 'หมวดสินค้าเพื่อการ sourcing ของผู้ค้า',
        description:
          'ตั้งแต่สมุนไพรแห้งแบบ loose ไปจนถึงชาพร้อมวางขาย ทุกหมวดออกแบบสำหรับขายส่ง ทดลองออเดอร์ และ supply ระยะยาว',
        items: [
          {
            title: 'วัตถุดิบสมุนไพร',
            description: 'พฤกษวัตถุแห้งสำหรับชา ซุป ผลิตภัณฑ์ wellness และการพัฒนาสูตรสินค้า',
            imageKey: 'rawHerbs',
          },
          {
            title: 'ชาสมุนไพร Blend',
            description: 'ชาดอกไม้ blend สำหรับ daily balance และคอนเซปต์ชาซอง lifestyle',
            imageKey: 'teaBlend',
          },
          {
            title: 'เครื่องดื่ม Wellness',
            description: 'แนวคิดเครื่องดื่มจากพฤกษวัตถุสำหรับคาเฟ่ ร้านค้า และแบรนด์เครื่องดื่ม wellness',
            imageKey: 'wellnessDrink',
          },
          {
            title: 'Sleep & Calm Series',
            description: 'Blend สำหรับ routine ยามเย็นอย่างอ่อนโยนจากวัตถุดิบพฤกษศาสตร์ดั้งเดิม',
            imageKey: 'sleepCalm',
          },
          {
            title: 'Gift & Retail Packs',
            description: 'แนวคิดแพ็กพรีเมียมสำหรับของขวัญตามฤดูกาลและชั้นวางสินค้า',
            imageKey: 'giftPack',
          },
          {
            title: 'OEM / Private Label',
            description: 'ชาซอง ฉลาก และบรรจุภัณฑ์ custom สำหรับแบรนด์ของผู้ค้า',
            imageKey: 'oemLabel',
          },
        ],
      },
      featured: {
        eyebrow: 'สินค้าขายส่งยอดนิยม',
        title: 'สินค้าแนะนำสำหรับ Inquiry B2B',
        description:
          'รายการเริ่มต้นสำหรับผู้ค้าที่ต้องการวัตถุดิบสมุนไพร แนวคิดชา และรูปแบบ supply ที่ยืดหยุ่น',
      },
      why: {
        eyebrow: 'ความร่วมมือกับผู้ค้า',
        title: 'เหตุผลที่ผู้ค้าเลือก Herbal East Supply',
        description:
          'เราสนใจความต้องการทางการค้าที่ใช้งานจริง เช่น batch สินค้าผสม ตัวเลือก packing ชัดเจน และการตอบกลับที่รวดเร็ว',
        items: [
          'รองรับ Bulk & mixed cargo',
          'บรรจุภัณฑ์ยืดหยุ่น',
          'เน้นตลาดเอเชียตะวันออกเฉียงใต้',
          'แหล่งสินค้าเสถียร',
          'ร่วมงานแบบเป็นมิตรกับผู้ค้า',
          'ตอบ inquiry รวดเร็ว',
        ],
      },
      themes: {
        eyebrow: 'ธีม Wellness',
        title: 'แนวทางสมุนไพรเชิง Lifestyle',
        description:
          'ภาษาสินค้าสื่อสารอย่างนุ่มนวลและเหมาะกับการค้า โดยเน้น routine ประจำวันและวัฒนธรรมพฤกษศาสตร์ดั้งเดิม',
        items: ['Daily Wellness', 'Calm & Rest', 'Natural Refreshment', 'Herbal Tea Lifestyle', 'Seasonal Care'],
      },
      cta: {
        title: 'พร้อมสำหรับ Bulk Herbal Supply?',
        description:
          'ส่งรายการสินค้า ตลาดเป้าหมาย และจำนวนโดยประมาณ เราจะช่วยคุยเรื่องรูปแบบสินค้า บรรจุภัณฑ์ และตัวเลือกขายส่ง',
      },
    },
    products: {
      hero: {
        eyebrow: 'แคตตาล็อกขายส่ง',
        title: 'สินค้าสมุนไพรสำหรับผู้ค้า ผู้จัดจำหน่าย และร้าน wellness',
        description:
          'กรองตามแนวสินค้าและส่ง inquiry สำหรับ Bulk, loose cargo, packed หรือ OEM supply',
      },
      filters: {
        all: 'สินค้าทั้งหมด',
        raw: 'Raw Herbs',
        tea: 'Tea Ingredients',
        drinks: 'Herbal Drinks',
        calm: 'Sleep & Calm',
        soup: 'Soup & Cooking Herbs',
        oem: 'OEM Products',
      },
      listTitle: 'แคตตาล็อกสินค้า',
      listDescription:
        'แต่ละรายการสามารถคุยเรื่องรูปแบบ packing จำนวนโดยประมาณ และ trial order สำหรับผู้ค้าได้',
    },
    bulk: {
      hero: {
        eyebrow: 'รองรับ Batch Shipping',
        title: 'Bulk herbal supply, loose cargo และ batch สินค้าผสม',
        description:
          'เส้นทาง supply ที่ใช้งานง่ายสำหรับผู้ค้าส่ง ร้านสมุนไพร สตูดิโอ wellness แบรนด์ชา และผู้ค้าอาหารในเอเชียตะวันออกเฉียงใต้',
      },
      optionsTitle: 'ตัวเลือกการขนส่งและ packing',
      optionsDescription:
        'เลือกรูปแบบ supply ให้เหมาะกับขนาดออเดอร์ แผน retail และตลาดปลายทาง',
      options: [
        {
          title: 'Loose Cargo',
          description: 'รองรับ loose cargo สำหรับผู้ค้าที่ต้องการทดลองสินค้าสมุนไพรหลายรายการ',
          imageKey: 'bulkSupply',
        },
        {
          title: 'Carton Packing',
          description: 'บรรจุกล่องสะอาดสำหรับวัตถุดิบแห้ง ชาซอง และ retail packs',
          imageKey: 'cartonPacking',
        },
        {
          title: 'Mixed Product Batch',
          description: 'รวมหลาย SKU ใน batch เดียวเพื่อสร้างแคตตาล็อกที่กว้างขึ้น',
          imageKey: 'mixedBatch',
        },
        {
          title: 'Retail Pack',
          description: 'แพ็กที่เหมาะกับชั้นวางสำหรับร้านค้า wellness shop และช่องทางของขวัญ',
          imageKey: 'giftPack',
        },
        {
          title: 'OEM Pack',
          description: 'พูดคุยบรรจุภัณฑ์ private label สำหรับคอนเซปต์สมุนไพรของผู้ค้า',
          imageKey: 'oemLabel',
        },
      ],
      fitTitle: 'เหมาะกับช่องทางธุรกิจในเอเชียตะวันออกเฉียงใต้',
      fitItems: [
        'ผู้ค้าส่งวัตถุดิบสมุนไพร',
        'สตูดิโอ wellness และร้านสมุนไพร',
        'แบรนด์ชาและ lifestyle',
        'ผู้นำเข้าอาหารและผู้ค้าข้ามพรมแดน',
      ],
      processTitle: 'ขั้นตอนความร่วมมือ',
      process: [
        'ส่ง inquiry',
        'ยืนยันรายการสินค้า',
        'ยืนยันบรรจุภัณฑ์และจำนวน',
        'จัดการ batch shipping',
        'ร่วมมือ supply ระยะยาว',
      ],
      ctaTitle: 'ส่งอีเมลเพื่อขอราคาขายส่ง',
      ctaDescription:
        'แชร์สินค้าที่สนใจและประเทศของคุณ เราจะคุยเรื่องรูปแบบสินค้า packing และรายละเอียด batch supply ทางอีเมล',
    },
    oem: {
      hero: {
        eyebrow: 'โซลูชัน Private Label',
        title: 'OEM / ODM ชาซองสมุนไพร เครื่องดื่ม และแพ็กเกจ Wellness',
        description:
          'พัฒนาสินค้าสมุนไพรพร้อมขายด้วยบรรจุภัณฑ์ยืดหยุ่น แนวรสชาติ และการปรับให้เหมาะกับตลาดเอเชียตะวันออกเฉียงใต้',
      },
      solutionsTitle: 'OEM Solutions',
      solutionsDescription:
        'สร้างคอนเซปต์สินค้าที่เหมาะกับชั้นวาง retail คาเฟ่ ร้าน wellness และแบรนด์ของผู้ค้า',
      solutions: [
        'ปรับแต่งชาซองสมุนไพร',
        'พัฒนาแนวคิดเครื่องดื่ม wellness',
        'บรรจุภัณฑ์ private label',
        'ปรับรสชาติให้เข้ากับเอเชียตะวันออกเฉียงใต้',
        'วางแผน gift box และ retail pack',
        'ความร่วมมือแบรนด์ของผู้ค้า',
      ],
      privateTitle: 'Private label options',
      privateDescription:
        'เริ่มจากแนวคิดแคตตาล็อกง่าย ๆ หรือพูดคุยแนวสินค้าที่ครบขึ้นสำหรับแบรนด์ของคุณ',
      privateItems: [
        'พูดคุยฉลากเปล่าและแบรนด์ส่วนตัว',
        'แนวทางชาซอง loose leaf หรือเครื่องดื่มขวด',
        'ตัวเลือกกล่อง pouch jar และ gift pack',
        'รองรับ trial batch ก่อนขยายความร่วมมือ',
      ],
      formulaTitle: 'แนวทางสูตรสมุนไพร',
      formulaNote:
        'นี่คือทิศทางสินค้า lifestyle ไม่ใช่คำกล่าวอ้างด้านการรักษา ช่วยให้ผู้ค้าวางตำแหน่ง routine สมุนไพรประจำวันอย่างเหมาะสม',
      formulas: ['Calm & Rest', 'Daily Balance', 'Refreshing Herbal Tea', 'Women’s Wellness', 'Seasonal Care'],
      ctaTitle: 'วางแผนสินค้า OEM Herbal ของคุณ',
      ctaDescription:
        'ส่งอีเมลระบุตลาด ลูกค้าเป้าหมาย และประเภทสินค้าที่ต้องการ เราจะช่วยคุยทิศทาง private label ที่เหมาะสม',
    },
    about: {
      hero: {
        eyebrow: 'เกี่ยวกับพาร์ทเนอร์ supply',
        title: 'วัฒนธรรมพฤกษศาสตร์ดั้งเดิมกับบริการการค้าข้ามพรมแดนสมัยใหม่',
        description:
          'Herbal East Supply ช่วยผู้ค้าในเอเชียตะวันออกเฉียงใต้ sourcing วัตถุดิบสมุนไพรจีน ชา blend และคอนเซปต์สินค้า wellness พร้อมบริการ B2B ที่ใช้งานจริง',
      },
      storyTitle: 'แนวคิดการ supply',
      story:
        'เราทำงานบนพื้นฐานของ sourcing ที่เชื่อถือได้ การสื่อสารเรื่องบรรจุภัณฑ์ชัดเจน และความร่วมมือระยะยาวกับผู้ค้า แคตตาล็อกของเราสร้างเพื่อแบรนด์และ trader ที่ต้องการวัตถุดิบพฤกษศาสตร์สำหรับชา ซุป daily wellness และการพัฒนาสินค้า retail',
      marketTitle: 'ออกแบบเพื่อการค้าในเอเชียตะวันออกเฉียงใต้',
      market:
        'การพูดคุยสินค้าให้ความสำคัญกับจำนวนที่ยืดหยุ่น batch ผสม loose cargo และรูปแบบพร้อม retail เพื่อให้ผู้ค้าทดสอบตลาดก่อนขยายได้',
      qualityTitle: 'ขั้นตอนควบคุมคุณภาพ',
      qualityDescription:
        'ทุกออเดอร์สามารถคุยผ่านขั้นตอนเตรียมสินค้าที่ชัดเจน ตั้งแต่การคัดเลือกแหล่งที่มาไปจนถึงการเตรียมส่งออก',
      quality: ['คัดเลือกแหล่งที่มา', 'ทำแห้งและคัดแยก', 'บรรจุภัณฑ์', 'ตรวจ batch', 'เตรียมส่งออก'],
    },
    contact: {
      hero: {
        eyebrow: 'Wholesale inquiry',
        title: 'เริ่มสอบถามราคาขายส่งสมุนไพร',
        description:
          'แจ้งประเทศ สินค้าที่สนใจ และจำนวนโดยประมาณ หากต้องการคำตอบเร็วที่สุด กรุณาส่งอีเมลโดยตรง',
      },
      formTitle: 'ตัวอย่างฟอร์ม inquiry',
      formDescription:
        'ฟอร์มหน้าเว็บนี้ช่วยจัดรายละเอียด inquiry โปรดส่งข้อมูลทางอีเมลโดยตรงเพื่อการตอบกลับที่เร็วขึ้น',
      fields: {
        name: 'ชื่อ',
        company: 'บริษัท',
        country: 'ประเทศ',
        productInterest: 'สินค้าที่สนใจ',
        estimatedQuantity: 'จำนวนโดยประมาณ',
        message: 'ข้อความ',
      },
      placeholders: {
        name: 'ชื่อของคุณ',
        company: 'ชื่อบริษัทหรือร้านค้า',
        country: 'ประเทศ / พื้นที่',
        productInterest: 'โกจิเบอร์รี่ ชาสมุนไพร เครื่องดื่ม OEM...',
        estimatedQuantity: 'Trial order, cartons, mixed batch...',
        message: 'แจ้งความต้องการ packing ตลาดเป้าหมาย หรือคำถาม',
      },
      submit: 'ส่ง Inquiry',
      success:
        'ขอบคุณ กรุณาส่งอีเมลโดยตรงที่ {email} เพื่อการตอบกลับที่เร็วขึ้น',
      bottomNote: 'สำหรับรายการสินค้า ราคาขายส่ง และการพูดคุย OEM ติดต่อ:',
    },
    footer: {
      tagline:
        'วัตถุดิบสมุนไพรจีนพรีเมียม ชา blend และการสนับสนุน OEM supply สำหรับผู้ค้าในเอเชียตะวันออกเฉียงใต้',
      sections: {
        catalogue: 'Catalogue',
        company: 'Company',
        contact: 'Contact',
      },
      notice:
        'คำอธิบายสินค้าใช้เพื่ออ้างอิงด้าน lifestyle พฤกษศาสตร์ดั้งเดิมและ supply สำหรับผู้ค้าเท่านั้น ไม่ใช่คำกล่าวอ้างด้านการรักษา',
      rights: 'สงวนลิขสิทธิ์',
    },
  },
  vi: {
    seo: {
      homeTitle: 'Herbal East Supply | Sỉ Nguyên Liệu Thảo Mộc Trung Hoa',
      homeDescription:
        'Nguyên liệu thảo mộc Trung Hoa cao cấp, sản phẩm bulk, hỗ trợ loose cargo và giải pháp đồ uống thảo mộc OEM cho thương nhân Đông Nam Á.',
      productsTitle: 'Sản phẩm | Nguyên liệu thảo mộc và trà blend',
      productsDescription:
        'Xem thảo mộc thô, nguyên liệu trà, đồ uống wellness và sản phẩm OEM cho nguồn cung B2B.',
      bulkTitle: 'Bulk Supply | Sản phẩm thảo mộc loose cargo',
      bulkDescription:
        'Hỗ trợ bulk shipping, đơn hàng mixed batch, đóng carton và loose cargo cho thương nhân Đông Nam Á.',
      oemTitle: 'OEM / ODM Đồ uống thảo mộc và trà túi lọc',
      oemDescription:
        'Trà túi lọc private label, đồ uống wellness, gift pack và tùy chỉnh bao bì cho thương hiệu thương nhân.',
      aboutTitle: 'Giới thiệu | Văn hóa thảo mộc truyền thống và dịch vụ thương mại hiện đại',
      aboutDescription:
        'Tìm hiểu Herbal East Supply, triết lý sourcing, chuẩn bị batch và dịch vụ cung ứng thảo mộc hướng xuất khẩu.',
      contactTitle: 'Liên hệ | Bắt đầu inquiry sỉ thảo mộc',
      contactDescription:
        'Liên hệ Herbal East Supply qua email để nhận giá sỉ, sản phẩm bulk và hỗ trợ inquiry OEM.',
    },
    nav: {
      home: 'Home',
      products: 'Sản phẩm',
      bulk: 'Bulk Supply',
      oem: 'OEM / ODM',
      about: 'Giới thiệu',
      contact: 'Liên hệ',
      contactUs: 'Liên hệ',
      menu: 'Menu',
      close: 'Đóng menu',
    },
    common: {
      emailLabel: 'Email sỉ',
      inquiry: 'Inquiry',
      inquiryByEmail: 'Inquiry qua Email',
      contactWholesale: 'Liên hệ sỉ',
      viewProducts: 'Xem catalogue',
      supplyType: 'Loại cung ứng',
      supplyForm: 'Dạng cung ứng',
      moq: 'MOQ',
      bulk: 'Bulk',
      looseCargo: 'Loose Cargo',
      packed: 'Packed',
      oem: 'OEM',
      learnMore: 'Xem thêm',
      emailUs: 'Email cho chúng tôi',
    },
    emailPage: {
      seoTitle: 'Email sỉ | Herbal East Supply',
      seoDescription: 'Xem email inquiry sỉ của Herbal East Supply.',
      title: 'Email liên hệ sỉ',
      hint: 'Dùng email này cho danh sách sản phẩm, giá sỉ, loose cargo, bulk supply và trao đổi OEM / ODM.',
      copy: 'Sao chép Email',
      copied: 'Đã sao chép',
      openEmailApp: 'Mở ứng dụng Email',
      close: 'Đóng cửa sổ',
    },
    home: {
      hero: {
        eyebrow: 'Cung ứng thảo mộc B2B Đông Nam Á',
        title: 'Nguyên liệu thảo mộc Trung Hoa cao cấp cho thương hiệu Wellness Đông Nam Á',
        subtitle:
          'Giải pháp bulk supply, loose cargo và đồ uống thảo mộc OEM cho thương nhân, thương hiệu trà và nhà bán lẻ wellness trong khu vực.',
        highlight: 'Bulk Shipping · Loose Cargo · Herbal Tea · OEM / ODM',
        imageAlt: 'Bố cục nguyên liệu thảo mộc cao cấp và trà thảo mộc',
      },
      trust: [
        'Bulk Shipping',
        'Hỗ trợ Loose Cargo',
        'Trà & Đồ uống thảo mộc',
        'Có OEM / ODM',
        'Phù hợp thương mại Đông Nam Á',
      ],
      categories: {
        eyebrow: 'Định hướng catalogue',
        title: 'Danh mục sản phẩm cho nhu cầu sourcing của thương nhân',
        description:
          'Từ thảo mộc khô dạng loose đến trà blend sẵn sàng bán lẻ, mỗi danh mục phù hợp cho bán sỉ, trial order và nguồn cung dài hạn.',
        items: [
          {
            title: 'Nguyên liệu thảo mộc thô',
            description: 'Thảo mộc khô cho trà, súp, sản phẩm wellness và phát triển nguyên liệu.',
            imageKey: 'rawHerbs',
          },
          {
            title: 'Trà thảo mộc blend',
            description: 'Trà hoa, blend daily balance và concept trà túi lọc lifestyle.',
            imageKey: 'teaBlend',
          },
          {
            title: 'Đồ uống Wellness',
            description: 'Ý tưởng đồ uống thảo mộc cho cafe, nhà bán lẻ và thương hiệu wellness.',
            imageKey: 'wellnessDrink',
          },
          {
            title: 'Dòng Sleep & Calm',
            description: 'Blend nhẹ nhàng cho routine buổi tối với nguyên liệu thảo mộc truyền thống.',
            imageKey: 'sleepCalm',
          },
          {
            title: 'Gift & Retail Packs',
            description: 'Concept đóng gói cao cấp cho quà tặng mùa vụ và kênh bán lẻ.',
            imageKey: 'giftPack',
          },
          {
            title: 'OEM / Private Label',
            description: 'Trà túi lọc, nhãn và bao bì tùy chỉnh cho thương hiệu riêng của thương nhân.',
            imageKey: 'oemLabel',
          },
        ],
      },
      featured: {
        eyebrow: 'Mặt hàng sỉ phổ biến',
        title: 'Sản phẩm nổi bật cho inquiry B2B',
        description:
          'Danh sách khởi đầu gọn gàng cho thương nhân cần nguyên liệu thảo mộc, concept trà và dạng cung ứng linh hoạt.',
      },
      why: {
        eyebrow: 'Hợp tác thương nhân',
        title: 'Vì sao thương nhân chọn Herbal East Supply',
        description:
          'Chúng tôi tập trung vào nhu cầu thương mại thực tế: mixed batch, lựa chọn packing rõ ràng và phản hồi sản phẩm nhanh.',
        items: [
          'Hỗ trợ bulk & mixed cargo',
          'Bao bì linh hoạt',
          'Định hướng Đông Nam Á',
          'Nguồn cung ổn định',
          'Hợp tác thân thiện với thương nhân',
          'Phản hồi inquiry nhanh',
        ],
      },
      themes: {
        eyebrow: 'Chủ đề wellness',
        title: 'Định hướng thảo mộc theo lifestyle',
        description:
          'Ngôn ngữ sản phẩm nhẹ nhàng và hữu ích cho thương mại, tập trung vào routine hằng ngày và văn hóa thảo mộc truyền thống.',
        items: ['Daily Wellness', 'Calm & Rest', 'Natural Refreshment', 'Herbal Tea Lifestyle', 'Seasonal Care'],
      },
      cta: {
        title: 'Sẵn sàng cho Bulk Herbal Supply?',
        description:
          'Gửi danh sách sản phẩm, thị trường mục tiêu và số lượng dự kiến. Chúng tôi sẽ hỗ trợ trao đổi về dạng hàng, bao bì và lựa chọn cung ứng sỉ.',
      },
    },
    products: {
      hero: {
        eyebrow: 'Catalogue sỉ',
        title: 'Sản phẩm thảo mộc cho thương nhân, nhà phân phối và nhà bán lẻ wellness',
        description:
          'Lọc theo hướng sản phẩm và gửi inquiry nhanh cho bulk, loose cargo, packed hoặc OEM supply.',
      },
      filters: {
        all: 'Tất cả sản phẩm',
        raw: 'Raw Herbs',
        tea: 'Tea Ingredients',
        drinks: 'Herbal Drinks',
        calm: 'Sleep & Calm',
        soup: 'Soup & Cooking Herbs',
        oem: 'OEM Products',
      },
      listTitle: 'Catalogue sản phẩm',
      listDescription:
        'Mỗi sản phẩm có thể trao đổi về kiểu packing, số lượng dự kiến và trial order cho thương nhân.',
    },
    bulk: {
      hero: {
        eyebrow: 'Hỗ trợ batch shipping',
        title: 'Bulk herbal supply, loose cargo và mixed product batches',
        description:
          'Tuyến cung ứng thực tế cho nhà sỉ, cửa hàng thảo mộc, studio wellness, thương hiệu trà và trader thực phẩm tại Đông Nam Á.',
      },
      optionsTitle: 'Lựa chọn shipping và packing',
      optionsDescription:
        'Chọn dạng cung ứng phù hợp với quy mô đơn hàng, kế hoạch retail và thị trường đích.',
      options: [
        {
          title: 'Loose Cargo',
          description: 'Hỗ trợ loose cargo linh hoạt cho thương nhân thử nhiều sản phẩm thảo mộc.',
          imageKey: 'bulkSupply',
        },
        {
          title: 'Carton Packing',
          description: 'Đóng carton gọn sạch cho nguyên liệu khô, trà túi lọc và retail packs.',
          imageKey: 'cartonPacking',
        },
        {
          title: 'Mixed Product Batch',
          description: 'Kết hợp nhiều SKU trong một batch để xây dựng catalogue rộng hơn.',
          imageKey: 'mixedBatch',
        },
        {
          title: 'Retail Pack',
          description: 'Bao bì phù hợp kệ bán lẻ cho cửa hàng, wellness shop và kênh quà tặng.',
          imageKey: 'giftPack',
        },
        {
          title: 'OEM Pack',
          description: 'Trao đổi bao bì private label cho concept thảo mộc của thương nhân.',
          imageKey: 'oemLabel',
        },
      ],
      fitTitle: 'Phù hợp với kênh kinh doanh Đông Nam Á',
      fitItems: [
        'Nhà sỉ nguyên liệu thảo mộc',
        'Wellness studio và cửa hàng thảo mộc',
        'Thương hiệu trà và lifestyle',
        'Nhà nhập khẩu thực phẩm và trader xuyên biên giới',
      ],
      processTitle: 'Quy trình hợp tác',
      process: [
        'Gửi inquiry',
        'Xác nhận danh sách sản phẩm',
        'Xác nhận bao bì và số lượng',
        'Sắp xếp batch shipping',
        'Hợp tác nguồn cung dài hạn',
      ],
      ctaTitle: 'Email để nhận giá sỉ',
      ctaDescription:
        'Chia sẻ sản phẩm quan tâm và quốc gia của bạn. Chúng tôi sẽ trao đổi về dạng sản phẩm, packing và chi tiết batch supply qua email.',
    },
    oem: {
      hero: {
        eyebrow: 'Giải pháp private label',
        title: 'OEM / ODM trà túi lọc thảo mộc, đồ uống và bao bì wellness',
        description:
          'Phát triển sản phẩm thảo mộc sẵn sàng cho thương nhân với bao bì linh hoạt, hướng vị và thích nghi thị trường Đông Nam Á.',
      },
      solutionsTitle: 'Giải pháp OEM',
      solutionsDescription:
        'Tạo concept sản phẩm phù hợp với kệ bán lẻ, cafe, cửa hàng wellness và thương hiệu riêng của thương nhân.',
      solutions: [
        'Tùy chỉnh trà túi lọc thảo mộc',
        'Phát triển concept đồ uống wellness',
        'Bao bì private label',
        'Điều chỉnh vị cho Đông Nam Á',
        'Lên kế hoạch gift box và retail pack',
        'Hợp tác thương hiệu thương nhân',
      ],
      privateTitle: 'Tùy chọn private label',
      privateDescription:
        'Bắt đầu từ ý tưởng catalogue đơn giản hoặc trao đổi hướng sản phẩm đầy đủ hơn cho thương hiệu của bạn.',
      privateItems: [
        'Trao đổi nhãn trắng và thương hiệu riêng',
        'Hướng trà túi lọc, loose leaf hoặc đồ uống chai',
        'Tùy chọn box, pouch, jar và gift pack',
        'Hỗ trợ trial batch trước khi hợp tác lớn hơn',
      ],
      formulaTitle: 'Định hướng công thức thảo mộc',
      formulaNote:
        'Đây là định hướng sản phẩm lifestyle, không phải tuyên bố điều trị y tế. Nội dung giúp thương nhân định vị routine thảo mộc hằng ngày an toàn hơn.',
      formulas: ['Calm & Rest', 'Daily Balance', 'Refreshing Herbal Tea', 'Women’s Wellness', 'Seasonal Care'],
      ctaTitle: 'Lên kế hoạch sản phẩm OEM herbal',
      ctaDescription:
        'Email thị trường, khách hàng mục tiêu và loại sản phẩm mong muốn. Chúng tôi có thể trao đổi hướng private label phù hợp.',
    },
    about: {
      hero: {
        eyebrow: 'Về đối tác cung ứng',
        title: 'Văn hóa thảo mộc truyền thống cùng dịch vụ thương mại xuyên biên giới hiện đại',
        description:
          'Herbal East Supply giúp thương nhân Đông Nam Á sourcing nguyên liệu thảo mộc Trung Hoa, trà blend và concept sản phẩm wellness với hỗ trợ B2B thực tế.',
      },
      storyTitle: 'Triết lý cung ứng',
      story:
        'Chúng tôi tập trung vào sourcing đáng tin cậy, giao tiếp bao bì rõ ràng và hợp tác thương nhân dài hạn. Catalogue được xây dựng cho brand và trader cần nguyên liệu thảo mộc cho trà, súp, daily wellness và phát triển sản phẩm retail.',
      marketTitle: 'Thiết kế cho thương mại Đông Nam Á',
      market:
        'Trao đổi sản phẩm cân nhắc số lượng linh hoạt, mixed batch, loose cargo và dạng retail-ready để thương nhân thử nhu cầu trước khi mở rộng.',
      qualityTitle: 'Quy trình kiểm soát chất lượng',
      qualityDescription:
        'Mỗi đơn hàng có thể được trao đổi theo quy trình chuẩn bị rõ ràng, từ chọn nguồn đến chuẩn bị xuất khẩu.',
      quality: ['Chọn nguồn', 'Sấy và phân loại', 'Đóng gói', 'Kiểm tra batch', 'Chuẩn bị xuất khẩu'],
    },
    contact: {
      hero: {
        eyebrow: 'Wholesale inquiry',
        title: 'Bắt đầu inquiry sỉ thảo mộc',
        description:
          'Cho chúng tôi biết quốc gia, sản phẩm quan tâm và số lượng dự kiến. Để phản hồi nhanh nhất, vui lòng email trực tiếp.',
      },
      formTitle: 'Form inquiry preview',
      formDescription:
        'Form front-end này giúp bạn sắp xếp thông tin inquiry. Vui lòng email trực tiếp để nhận phản hồi nhanh hơn.',
      fields: {
        name: 'Tên',
        company: 'Công ty',
        country: 'Quốc gia',
        productInterest: 'Sản phẩm quan tâm',
        estimatedQuantity: 'Số lượng dự kiến',
        message: 'Tin nhắn',
      },
      placeholders: {
        name: 'Tên của bạn',
        company: 'Tên công ty hoặc cửa hàng',
        country: 'Quốc gia / khu vực',
        productInterest: 'Goji berry, trà thảo mộc, đồ uống OEM...',
        estimatedQuantity: 'Trial order, cartons, mixed batch...',
        message: 'Chia sẻ nhu cầu packing, thị trường mục tiêu hoặc câu hỏi',
      },
      submit: 'Gửi Inquiry',
      success:
        'Cảm ơn bạn. Vui lòng email trực tiếp đến {email} để nhận phản hồi nhanh hơn.',
      bottomNote: 'Để nhận danh sách sản phẩm, giá sỉ và trao đổi OEM, liên hệ:',
    },
    footer: {
      tagline:
        'Nguyên liệu thảo mộc Trung Hoa cao cấp, trà blend và hỗ trợ OEM supply cho thương nhân Đông Nam Á.',
      sections: {
        catalogue: 'Catalogue',
        company: 'Công ty',
        contact: 'Liên hệ',
      },
      notice:
        'Mô tả sản phẩm chỉ dùng cho tham khảo về lifestyle thảo mộc truyền thống và nguồn cung thương mại. Không phải tuyên bố điều trị y tế.',
      rights: 'Đã đăng ký bản quyền.',
    },
  },
} as const;
