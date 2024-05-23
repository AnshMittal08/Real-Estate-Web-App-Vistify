// import React from "react";
// import FlatItem from "./FlatItem";
// import "./FlatList.css";

// const FlatList = () => {
//   return (
//     <>
//           <h1 align="center">Properties</h1>
//     <section className="section-all-re">
//       <div className="container">
//         <div className="row">
//           <FlatItem
//             slug="slug1"
//             title="Vella Villa"
//             price="1.2Cr"
//             bedrooms="3"
//             bathrooms="2"
//             sqft="2000"
//             im="https://www.nipponpaint.co.in/wp-content/uploads/2020/08/exterior-emulsion-paint-for-your-house-1024x681.jpg"
//           />
//           <FlatItem
//             slug="slug2"
//             title="Prerna Bhavan"
//             price="1.0Cr"
//             bedrooms="4"
//             bathrooms="3"
//             sqft="2500"
//             im="https://img.staticmb.com/mbcontent/images/uploads/2021/10/3d-illustration-image-modern-house-models.jpg"
//           />
//           <FlatItem
//             slug="slug2"
//             title="Mantra Mahal"
//             price="1.5Cr"
//             bedrooms="4"
//             bathrooms="3"
//             sqft="3000"
//             im="https://assets-news.housing.com/news/wp-content/uploads/2022/01/19123930/7-aesthetically-appealing-exterior-paint-colours-for-Indian-homes-shutterstock_133537259.jpg"
//           />
//           <FlatItem
//             slug="slug2"
//             title="Vastu Villa"
//             price="3.3Cr"
//             bedrooms="6"
//             bathrooms="5"
//             sqft="5500"
//             im="https://i.pinimg.com/1200x/3d/b7/94/3db794e7f248cee8384ac11b8a729ea8.jpg"
//           />
//           <FlatItem
//             slug="slug2"
//             title="Shanti Sadan"
//             price="1.0Cr"
//             bedrooms="2"
//             bathrooms="2"
//             sqft="2000"
//             im="https://aastitvastore.com/wp-content/uploads/2021/08/EXTERIOR-DESIGN-127-711x400.jpg"
            
//           />
//           <FlatItem
//             slug="slug2"
//             title="Ganga Kutir"
//             price="2.0Cr"
//             bedrooms="5"
//             bathrooms="4"
//             sqft="4500"
//             im="https://i.pinimg.com/1200x/d6/ef/d3/d6efd3fad503831c51c793b5d465072f.jpg"
//           />
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default FlatList;

import React from "react";
import FlatItem from "./FlatItem";
import "./FlatList.css";

const FlatList = () => {

  return (
    <>
      <h1 align="center">Properties</h1>
      <section className="section-all-re">
        <div className="container">
          <div className="row">
          <FlatItem
            slug="slug1" title="Vella Villa" price="1.2Cr" bedrooms="3" bathrooms="2"  sqft="2000"  im="https://www.nipponpaint.co.in/wp-content/uploads/2020/08/exterior-emulsion-paint-for-your-house-1024x681.jpg"  address="123 Main St"
            images = {[{ original: 'https://www.nipponpaint.co.in/wp-content/uploads/2020/08/exterior-emulsion-paint-for-your-house-1024x681.jpg', thumbnail: 'https://www.nipponpaint.co.in/wp-content/uploads/2020/08/exterior-emulsion-paint-for-your-house-1024x681.jpg' },
            { original: 'https://www.nipponpaint.co.in/wp-content/uploads/2020/08/exterior-emulsion-paint-for-your-house-1024x681.jpg', thumbnail: 'https://www.nipponpaint.co.in/wp-content/uploads/2020/08/exterior-emulsion-paint-for-your-house-1024x681.jpg' },
            { original: 'https://www.nipponpaint.co.in/wp-content/uploads/2020/08/exterior-emulsion-paint-for-your-house-1024x681.jpg', thumbnail: 'https://www.nipponpaint.co.in/wp-content/uploads/2020/08/exterior-emulsion-paint-for-your-house-1024x681.jpg' }]} description="A beautiful villa with all modern amenities."
            propertyDetails={[
            { label: "Built in", value: "2010" },
            { label: "Garage", value: "2-car garage" },
            { label: "Pool", value: "Swimming pool" }]}

            features={[
              "Air conditioning",
              "Central heating"
            ]}
            categories={[
              "Residential",
              "Luxury"
            ]}
/>

            <FlatItem
              slug="slug2" title="Prerna Bhavan" price="1.0Cr" bedrooms="4" bathrooms="3"  sqft="2500"  im="https://img.staticmb.com/mbcontent/images/uploads/2021/10/3d-illustration-image-modern-house-models.jpg"  address="123 Main St"
              images = {[{ original: 'https://img.staticmb.com/mbcontent/images/uploads/2021/10/3d-illustration-image-modern-house-models.jpg', thumbnail: 'https://img.staticmb.com/mbcontent/images/uploads/2021/10/3d-illustration-image-modern-house-models.jpg' },
            { original: 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Small-Unique-Bedroom-AdobeStock-206068297-copy.jpeg', thumbnail: 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Small-Unique-Bedroom-AdobeStock-206068297-copy.jpeg' },
            { original: 'https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg', thumbnail: 'https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg' }]} description="A beautiful villa with all modern amenities."
            propertyDetails={[
            { label: "Built in", value: "2010" },
            { label: "Garage", value: "2-car garage" },
            { label: "Pool", value: "Swimming pool" }]}
            features={[
              "Air conditioning",
              "Central heating",
              "Master Bedroom"
            ]}
            categories={[
              "Residential",
              "Luxury"
            ]}
            />
            <FlatItem
              slug="slug3" title="Mantra Mahal" price="1.5Cr" bedrooms="4" bathrooms="3"  sqft="3000"  im="https://assets-news.housing.com/news/wp-content/uploads/2022/01/19123930/7-aesthetically-appealing-exterior-paint-colours-for-Indian-homes-shutterstock_133537259.jpg"  address="123 Main St"
              images = {[{ original: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19123930/7-aesthetically-appealing-exterior-paint-colours-for-Indian-homes-shutterstock_133537259.jpg', thumbnail: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19123930/7-aesthetically-appealing-exterior-paint-colours-for-Indian-homes-shutterstock_133537259.jpg' },
            { original: 'https://ddreps.com/wp-content/uploads/2023/09/IMG_5034-web.jpg', thumbnail: 'https://ddreps.com/wp-content/uploads/2023/09/IMG_5034-web.jpg' },
            { original: 'https://images.mansionglobal.com/im-86039157?width=1299&height=730', thumbnail: 'https://images.mansionglobal.com/im-86039157?width=1299&height=730' }]} description="A beautiful villa with all modern amenities."
            propertyDetails={[
            { label: "Built in", value: "2010" },
            { label: "Garage", value: "2-car garage" },
            { label: "Pool", value: "Swimming pool" }]}
            features={[
              "Air conditioning",
              "Central heating",
              "Master Bedroom"
            ]}
            categories={[
              "Residential",
              "Luxury"
            ]}
            />
            <FlatItem
              slug="slug4" title="Vastu Villa" price="3.3Cr" bedrooms="6" bathrooms="4"  sqft="5500"  im="https://i.pinimg.com/1200x/3d/b7/94/3db794e7f248cee8384ac11b8a729ea8.jpg"  address="123 Main St"
              images = {[{ original: 'https://i.pinimg.com/1200x/3d/b7/94/3db794e7f248cee8384ac11b8a729ea8.jpg', thumbnail: 'https://i.pinimg.com/1200x/3d/b7/94/3db794e7f248cee8384ac11b8a729ea8.jpg' },
            { original: 'https://www.wolferizor.com/wp-content/uploads/2018/11/staging-and-interior-design-services.jpeg', thumbnail: 'https://www.wolferizor.com/wp-content/uploads/2018/11/staging-and-interior-design-services.jpeg' },
            { original: 'https://watermark.lovepik.com/photo/20211208/large/lovepik-real-estate-model-house-picture_501675220.jpg', thumbnail: 'https://watermark.lovepik.com/photo/20211208/large/lovepik-real-estate-model-house-picture_501675220.jpg' }]} description="A beautiful villa with all modern amenities."
            propertyDetails={[
            { label: "Built in", value: "2010" },
            { label: "Garage", value: "2-car garage" },
            { label: "Pool", value: "Swimming pool" }]}
            features={[
              "Air conditioning",
              "Central heating",
              "Master Bedroom"
            ]}
            categories={[
              "Residential",
              "Luxury"
            ]}
            />
            <FlatItem
              slug="slug5" title="Shanti Sadan" price="1.0Cr" bedrooms="2" bathrooms="2"  sqft="2000"  im="https://aastitvastore.com/wp-content/uploads/2021/08/EXTERIOR-DESIGN-127-711x400.jpg"  address="123 Main St"
              images = {[{ original: 'https://aastitvastore.com/wp-content/uploads/2021/08/EXTERIOR-DESIGN-127-711x400.jpg', thumbnail: 'https://aastitvastore.com/wp-content/uploads/2021/08/EXTERIOR-DESIGN-127-711x400.jpg' },
            { original: 'https://www.dkorinteriors.com/wp-content/uploads/2015/10/Render_Size.jpg', thumbnail: 'https://www.dkorinteriors.com/wp-content/uploads/2015/10/Render_Size.jpg' },
            { original: 'https://1.bp.blogspot.com/-LblxdcNrpJc/XMNpoj-t_AI/AAAAAAAACBE/W-0iYPQFnNwQUepjUhEFloxzCy43R-hQACLcBGAs/s1600/neonbrand-381374-unsplash.jpg', thumbnail: 'https://1.bp.blogspot.com/-LblxdcNrpJc/XMNpoj-t_AI/AAAAAAAACBE/W-0iYPQFnNwQUepjUhEFloxzCy43R-hQACLcBGAs/s1600/neonbrand-381374-unsplash.jpg' }]} description="A beautiful villa with all modern amenities."
            propertyDetails={[
            { label: "Built in", value: "2010" },
            { label: "Garage", value: "2-car garage" },
            { label: "Pool", value: "Swimming pool" }]}
            features={[
              "Air conditioning",
              "Central heating",
              "Master Bedroom"
            ]}
            categories={[
              "Residential",
              "Luxury"
            ]}
            />
            <FlatItem
              slug="slug6" title="Ganga Kutir" price="2.0Cr" bedrooms="5" bathrooms="3"  sqft="4500"  im="https://i.pinimg.com/1200x/d6/ef/d3/d6efd3fad503831c51c793b5d465072f.jpg"  address="123 Main St"
              images = {[{ original: 'https://i.pinimg.com/1200x/d6/ef/d3/d6efd3fad503831c51c793b5d465072f.jpg', thumbnail: 'https://i.pinimg.com/1200x/d6/ef/d3/d6efd3fad503831c51c793b5d465072f.jpg' },
            { original: 'https://images.squarespace-cdn.com/content/v1/5bcca055ab1a62465f5b9ee7/1588661939306-E5BKO5CD28DVRSSC5JEQ/beach-house-interior-design.jpg', thumbnail: 'https://images.squarespace-cdn.com/content/v1/5bcca055ab1a62465f5b9ee7/1588661939306-E5BKO5CD28DVRSSC5JEQ/beach-house-interior-design.jpg' },
            { original: 'https://thumbs.dreamstime.com/b/luxury-bedroom-night-large-bedroom-beautiful-lights-real-estate-renovation-company-home-staging-real-estate-agent-luxury-271403173.jpg', thumbnail: 'https://thumbs.dreamstime.com/b/luxury-bedroom-night-large-bedroom-beautiful-lights-real-estate-renovation-company-home-staging-real-estate-agent-luxury-271403173.jpg' }]} description="A beautiful villa with all modern amenities."
            propertyDetails={[
            { label: "Built in", value: "2010" },
            { label: "Garage", value: "2-car garage" },
            { label: "Pool", value: "Swimming pool" }]}
            features={[
              "Air conditioning",
              "Central heating",
              "Master Bedroom"
            ]}
            categories={[
              "Residential",
              "Luxury"
            ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FlatList;