import React from 'react';
import './Testimonials.css'; 


const testimonialsData = [
  {
    name: "Ayush Batra",
    title: "CEO, Stake",
    quote: "Vistify provided an exceptional service and I couldn't be happier with the results!",
    image: "https://img.freepik.com/free-photo/portrait-handsome-bearded-man_23-2149880047.jpg?w=900&t=st=1715975795~exp=1715976395~hmac=d7b097c91a454cb4b759099207929e5aca2b14037dfed48f38321b8db4fc57e0"
  },
  {
    name: "Ananya Choudhary",
    title: "Marketing Director",
    quote: "The team at Vistify is professional and efficient. Highly recommend!",
    image: "https://img.freepik.com/premium-photo/cute-woman_298317-1316.jpg?w=740"
  },
  {
    name: "Ansh Gaba",
    title: "Pro-Chancellor,IIT Jhansla",
    quote: "Vistify exceeded my expectations in every way. Their expertise and professionalism are unmatched.",
    image: "https://img.freepik.com/premium-photo/closeup-portrait-positive-man-blue-shirt_1016700-3457.jpg?size=626&ext=jpg&ga=GA1.1.1670721015.1715958162&semt=ais_user_b"
  },
  {
    name: "Ansh Mittal",
    title: "Professor,IIT Jhansla",
    quote: "Fantastic service from start to finish. Vistify made buying a home a breeze.",
    image: "https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-6994.jpg?w=900&t=st=1715975957~exp=1715976557~hmac=f037b004438ce5986119c6444a2bc01088c748e8ff95c74ba3f179c7f9efd542"
  },
  {
    name: "Ansh Arora",
    title: "Security Head,IIT Zirakpur",
    quote: "Vistify's attention to detail and customer service is top-notch. I would highly recommend them.",
    image: "https://img.freepik.com/free-photo/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera_176532-8164.jpg?w=900&t=st=1715975899~exp=1715976499~hmac=431587920e452e5c3324fb0130c02bbcb7ceac66f54ba21e0e6a70934df76652"
  },
  {
    name: "Gourika Soni",
    title: "Backend Developer",
    quote: "Vistify helped me find the perfect property. Their support was outstanding!",
    image: "https://img.freepik.com/premium-photo/image-closeup-young-european-woman-20s-with-long-curly-hairstyle-evening-makeup-smiling-camera-with-happy-look-isolated-pink-background_171337-38438.jpg?w=900"
  }
];

const Testimonials = () => {
  return (
    <div>
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
            <p>"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
