import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    trigger: "Is it styled?",
    content: "Yes. It comes with default styles that matches the other components aesthetic.",
  },
  {
    value: "item-3",
    trigger: "Is it animated?",
    content: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
]; 


export default function Page() {
  return (
    <div>
      <Accordion type="single" collapsible  className="w-full">
        {
          items.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))
        }
        
       
      </Accordion> 
    </div>
  );
}