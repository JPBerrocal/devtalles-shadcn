'use client';


import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast";

export default function Page() {

    const { toast } = useToast();
  return (
    <div className="grid grid-cols-3 gap-3">
       <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
     <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again" onClick={() => console.log("Try again")}>Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
     <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
    <Button
      variant="success"
      onClick={() => {
        toast({
          variant: "success",
          title: "Success",
          description: "Its alive",
          
        })
      }}
    >
      Show success
    </Button>
    </div>
  );
}