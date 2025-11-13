import Footer from "../components/General/Footer";
import Navbar from "../components/General/Navbar";
import Events from "../components/Events/Events";

const EventsPage = () => {
  return (
    <>
      <title>BARTA Research Lab - Events</title>
      <meta
        name="description"
        content="View upcoming and past events organized by BARTA Research Lab, including workshops, conferences, and seminars."
      />
      
      <div className="px-2 md:px-0 bg-cream-primary min-h-screen">
        <Navbar />
        <div className="pt-20 lg:pt-24 pb-16">
          <div className="container mx-auto max-w-7xl px-4">
            <Events />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EventsPage;

