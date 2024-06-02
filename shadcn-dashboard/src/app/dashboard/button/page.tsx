import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { ReloadIcon } from "@radix-ui/react-icons"


export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
     <Button>Default</Button>
     <Button disabled>default</Button>
     <Button variant="destructive">Destructive</Button>
     <Button variant="ghost">ghost</Button>
     <Button variant="link">link</Button>
     <Button variant="outline">outline</Button>
     <Button variant="secondary">secondary</Button>
     <Button variant="success">success</Button>
     <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
     </Button>
     <Button>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
     
    </div>
  );
}