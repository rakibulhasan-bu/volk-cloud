import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

export function LogIn() {
    return (
        <Card className="min-w-96 bg-white/90">
            <CardHeader>
                <CardTitle className="text-center">Log In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Input className="rounded-full" id="name" placeholder="Username" />
                </div>
                <div className="space-y-1 pt-1">
                    <Input type="password" className="rounded-full" id="password" placeholder="Password" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col w-full">
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-full w-full">Get Started</Button>
                <div className='flex items-center justify-between w-full pt-2 text-slate-600'>
                    <Link href={"#"} className="hover:text-blue-600">Create account</Link>
                    <Link href={"#"} className="hover:text-blue-600"> Need help?</Link>
                </div>
            </CardFooter>
        </Card>
    )
}
