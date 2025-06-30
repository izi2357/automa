
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    { name: "C Stewart", amount: "214 $", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "R Johnson", amount: "400 $", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "A Singh", amount: "155 $", avatar: "https://randomuser.me/api/portraits/men/56.jpg" },
    { name: "M Woods", amount: "845 $", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-slate-800/60 backdrop-blur-sm border-slate-700 p-4 text-center hover:bg-slate-800/80 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="mx-auto mb-2 w-16 h-16 rounded-full object-cover"
          />
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-green-400 font-bold text-lg">{testimonial.amount}</p>
          <p className="text-slate-300 text-sm">Profit Quotidien</p>
        </Card>
      ))}
    </div>
  );
};

export default Testimonials;
