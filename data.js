const products = [
    {
      id: 1,
      brand: 'Mikrotik',
      model: 'RB-951UI',
      category: 'Redes',
      price: 100
    },
    {
      id: 2,
      brand: 'Mikrotik',
      model: 'RB-951G',
      category: 'Networkin',
      price: 120
    },
    {
      id: 3,
      brand: 'Mikrotik',
      model: 'RB-952-AC',
      category: 'Redes',
      price: 150
    },
    {
      id: 4,
      brand: 'Mikrotik',
      model: 'RB-3011',
      category: 'Networkin',
      price: 300
    },
    {
      id: 5,
      brand: 'Ubiquiti',
      model: 'UAP-AC-Lite',
      category: 'Networkin',
      price: 200
    },
    {
      id: 6,
      brand: 'Ubiquiti',
      model: 'LiteBeam-AC',
      category: 'Networkin',
      price: 300
    },
    {
      id: 7,
      brand: 'Ubiquiti',
      model: 'LiteBeam-AC-2gen',
      category: 'Redes',
      price: 300
    },
  ]

export const getProducts = () => {
  setTimeout(() => {
    return products
  }, 1000);
} 
