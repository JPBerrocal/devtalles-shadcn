import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="grid grid-cols-6 gap-2">
      <Badge>Badge</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success" capitalize={true}>success</Badge>
      <Badge variant="info" capitalize={true}>info</Badge>
    </div>
  );
}