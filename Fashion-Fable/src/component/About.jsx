import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Our E-commerce Store</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            Welcome to our E-commerce store! We are passionate about providing high-quality products and excellent
            service to our valued customers. Our goal is to create a seamless shopping experience for you.
          </p>
          <p>
            At our store, you'll find a wide range of products, from electronics to fashion, all carefully curated to
            meet your needs. We strive to stay up-to-date with the latest trends and technologies to bring you the best
            shopping options.
          </p>
          <p>
            Customer satisfaction is our priority. If you have any questions or concerns, our dedicated support team is
            here to assist you. We appreciate your trust in us and look forward to serving you.
          </p>
        </div>
        <div className="col-md-6">
          {/* You can add an image or other content in the second column if needed */}
          <img
            src="https://placekitten.com/400/300" // Replace with your image source
            alt="About Us"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
