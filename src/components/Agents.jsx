import React from 'react';
import './Agents.css';
import Navbar from './Navbar';
import Footer from './Footer';

const agentsData = [
  {
    name: "Dr. Ashok Chitkara",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv27ywpSo90uv3ajK_brVoMtKkFmgd_PXYaQ&usqp=CAU",
    phone: "+123456789",
    email: "ashok@chitkara.edu.in",
    bio: "Dr. Ashok K. Chitkara is an esteemed professional with a vast experience in real estate and education.",
  },
  {
    name: "Dr. Madhu Chitkara",
    image: "data:image/jpeg;base64,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",
    phone: "+987654321",
    email: "madhu@chitkara.edu.in",
    bio: "Mrs Madhu specializes in luxury properties and has a knack for finding the perfect homes for her clients.",
  },
  {
    name: "Mr. Gautam Adani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGSyADBd5UTO-tYRevPZWJGSXY02H5koUxQ&usqp=CAU",
    phone: "+5647382910",
    email: "gautam@adani.com",
    bio: "Gautam is known for his excellent negotiation skills and commitment to his clients.",
  },
];

const Agents = () => {
  return (
    <div>
    <Navbar/>
    <div className="agents-container">
      <h1 className="agents-title">Meet Our Agents</h1>
      <div className="agents-list">
        {agentsData.map((agent, index) => (
          <div className="agent-card" key={index}>
            <img src={agent.image} alt={agent.name} className="agent-image" />
            <div className="agent-details">
              <h2>{agent.name}</h2>
              <p><strong>Phone:</strong> {agent.phone}</p>
              <p><strong>Email:</strong> {agent.email}</p>
              <p>{agent.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Agents;