import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carts from "@/components/servicescomps/carts";
import Img from "@/components/servicescomps/img";

export default  function Services (){
  return(
    <div className="bg-gray-950">
      <Navbar />
      <Img />
      <Carts />
      <Footer />

    </div>
  )
}