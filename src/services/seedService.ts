import { db } from '@/lib/firebase';
import { collection, doc, setDoc, getDocs, query, limit } from 'firebase/firestore';

export async function seedInitialData() {
  const contactsSnap = await getDocs(query(collection(db, 'contacts'), limit(1)));
  if (contactsSnap.empty) {
    const contacts = [
      { name: 'Empresa A', email: 'admin@empresa-a.com', type: 'customer', status: 'active', ownerId: 'system' },
      { name: 'Proveedor B', email: 'ventas@prov-b.com', type: 'vendor', status: 'active', ownerId: 'system' },
    ];
    for (const c of contacts) {
      const ref = doc(collection(db, 'contacts'));
      await setDoc(ref, { ...c, createdAt: new Date().toISOString() });
    }
  }

  const productsSnap = await getDocs(query(collection(db, 'products'), limit(1)));
  if (productsSnap.empty) {
    const products = [
      { name: 'Producto Estrella', price: 99.99, stock: 100, category: 'General' },
      { name: 'Servicio Premium', price: 499.00, stock: 999, category: 'Servicios' },
    ];
    for (const p of products) {
      const ref = doc(collection(db, 'products'));
      await setDoc(ref, { ...p, createdAt: new Date().toISOString() });
    }
  }
}
