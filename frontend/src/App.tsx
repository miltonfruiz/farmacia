import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Medicine {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

const App: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/api/medicines`)
      .then(response => response.json())
      .then(data => setMedicines(data));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${API_URL}/api/medicines`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, quantity }),
    })
      .then(response => response.json())
      .then(data => setMedicines([...medicines, data]));
  };

  const handleUpdate = (item: Medicine) => {
    fetch(`${API_URL}/api/medicines/${item._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(data => setMedicines(medicines.map(m => m._id === item._id ? data : m)));
  };

  const handleDelete = (item: Medicine) => {
    fetch(`${API_URL}/api/medicines/${item._id}`, { method: 'DELETE' })
      .then(() => setMedicines(medicines.filter(m => m._id !== item._id)));
  };

  return (
    <div>
      <h1>Medicines</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
        <input type="number" value={price} onChange={(event) => setPrice(Number(event.target.value))} placeholder="Price" />
        <input type="number" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} placeholder="Quantity" />
        <button type="submit">Create Medicine</button>
      </form>
      <ul>
        {medicines.map((item) => (
          <li key={item._id}>
            <span>{item.name}</span>
            <span> - {item.price}</span>
            <span> - {item.quantity}</span>
            <button onClick={() => handleUpdate(item)}>Update</button>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;