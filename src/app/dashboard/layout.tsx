import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <div><UserButton/>
            {children}
        </div>
    )
}