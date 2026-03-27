import CarpetContentSection from "./carpetpage/CarpetContentSection";
import { CarpetDiscount } from "./carpetpage/CarpetDiscount";
import HomeCarpet from "./carpetpage/HomeCarpet";

const HomeCarpetContent = () => {
  return (
    <>
      <CarpetContentSection
        title="Comfortable and Stylish Home Carpets in Dubai"
        description="At First Choice Carpet, we provide flooring solutions designed to improve comfort and interior style for residential spaces across Dubai. A well-chosen carpet can transform living areas, bedrooms, and family spaces by adding warmth, texture, and a refined interior finish."
      />

      <HomeCarpet></HomeCarpet>

      <div className="w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="w-full max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Home Carpets Dubai</h2>

          <p className="text-gray-700 leading-relaxed">
            Our range of home carpets in Dubai is carefully selected to suit
            modern apartments, villas, and residential properties.
          </p>

          <p className="text-gray-700 leading-relaxed">
            As a reliable home carpet supplier, we offer carpets in various
            textures, colours, and materials to suit different interior themes.
            Whether you prefer a soft floor carpet for home areas or a durable
            option for high-traffic living spaces, our collection supports both
            comfort and long-term use.
          </p>

          <h2 className="text-2xl font-semibold">
            Practical Carpet Options for Residential Interiors
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Choosing the right carpet for home floor areas helps create a
            welcoming and comfortable environment. Our carpets are suitable for
            bedrooms, living rooms, family lounges, and private study areas.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With multiple design options available, homeowners can select carpet
            styles that match their interior décor while maintaining
            practicality.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Many residents exploring home centre carpets look for flooring that
            balances appearance and durability. Our carpets are designed to
            provide a soft underfoot experience while maintaining performance in
            everyday household use.
          </p>

          <p className="text-gray-700 leading-relaxed">
            As an experienced home carpet supplier, we assist homeowners in
            selecting the right carpet type for different areas of the house.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our selection of home carpet in Dubai includes neutral tones,
            contemporary textures, and classic finishes that complement a wide
            range of residential interiors.
          </p>

          <h2 className="text-2xl font-semibold">
            Why Homeowners Choose Carpet Flooring
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">
                Comfort for Living Spaces
              </h3>
              <p className="text-gray-700">
                A quality floor carpet for home areas provides warmth and
                cushioning, improving everyday comfort.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Improved Interior Appearance
              </h3>
              <p className="text-gray-700">
                Carpets enhance the visual appeal of bedrooms, living rooms, and
                private lounges.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Noise Reduction Indoors</h3>
              <p className="text-gray-700">
                Installing carpet for home floor areas helps reduce footstep
                noise within the house.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Suitable for Modern Interiors
              </h3>
              <p className="text-gray-700">
                Our carpets provide practical alternatives to typical home
                centre carpets, offering durable and stylish flooring solutions.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">
            Explore Residential Carpet Options
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Discover quality carpet solutions for apartments and villas with
            First Choice Carpet. Contact our team today to explore comfortable
            flooring options and find the right home carpet in Dubai for your
            living space in Dubai.
          </p>
        </div>
      </div>

      <CarpetDiscount />
    </>
  );
};

export default HomeCarpetContent;
