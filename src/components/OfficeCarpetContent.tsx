import CarpetContentSection from "./carpetpage/CarpetContentSection";
import { CarpetDiscount } from "./carpetpage/CarpetDiscount";
import OfficeCarpet from "./carpetpage/OfficeCarpet";

const OfficeCarpetContent = () => {
  return (
    <>
      <CarpetContentSection
        title="Reliable Office Carpet"
        description="At First Choice Carpet, we provide carpet solutions designed for modern offices and commercial interiors across Dubai. Workspaces require flooring that combines durability, comfort, and a professional appearance. Our range of office carpets in Dubai is selected to meet the practical requirements of corporate offices, meeting rooms, and shared workspaces."
      />

      <OfficeCarpet />

      <div className="w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="w-full max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-center">
            Office Carpets Dubai
          </h1>

          <p className="text-gray-700 leading-relaxed">
            As a reliable office carpet supplier, we help businesses choose
            flooring that performs well in high-traffic environments while
            maintaining a neat and consistent look. From executive cabins to
            open office layouts, our carpets are chosen for their durability,
            acoustic benefits, and ability to complement contemporary interior
            styles.
          </p>

          <h2 className="text-2xl font-semibold">
            Reliable Office Carpet Flooring for Modern Offices
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Selecting the right office carpet flooring plays an important role
            in creating a productive and comfortable work environment. Our
            carpets are available in various textures, practical colour tones,
            and durable materials suited to the daily demands of office spaces
            in Dubai.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Many companies prefer carpet flooring because it reduces sound
            levels and improves comfort for employees. As an experienced office
            carpet supplier, we support businesses by providing flooring options
            that suit different workspace layouts, including workstations,
            meeting areas, and reception spaces.
          </p>

          <h2 className="text-2xl font-semibold">
            Benefits of Installing Office Carpets
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Comfort for Daily Work</h3>
              <p className="text-gray-700">
                Carpet surfaces provide cushioning underfoot, making office
                environments more comfortable for employees.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Noise Reduction</h3>
              <p className="text-gray-700">
                High-quality office carpet flooring helps minimise sound,
                creating a quieter workspace.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Professional Interior Finish
              </h3>
              <p className="text-gray-700">
                Carpet flooring improves the overall presentation of offices and
                meeting areas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Durable for High Traffic
              </h3>
              <p className="text-gray-700">
                Our carpets are designed to perform well in busy workplaces and
                commercial settings.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">
            Explore Office Carpet Options at Competitive Prices
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Upgrade your workspace with durable flooring from First Choice
            Carpet. Contact our team today to discover practical carpet
            solutions for offices across Dubai.
          </p>
        </div>
      </div>

      <CarpetDiscount />
    </>
  );
};

export default OfficeCarpetContent;
