import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormLabel } from "@/components/ui/form";

export default function Component() {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card className="w-full max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>File a Complaint</CardTitle>
                        <CardDescription>
                            Use this form to report an incident and request
                            appropriate action.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                    <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-2">
                                <FormLabel htmlFor="title">Title</FormLabel>
                                <FormControl>
                                    <Textarea
                                        id="title"
                                        placeholder="Briefly describe the incident"
                                    />
                                </FormControl>
                            </div>
                        </FormItem>/>
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormtItem>
                            <div className="grid gap-2">
                                <FormLabel htmlFor="incident-type">
                                    Type of Incident
                                </FormLabel>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select incident type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="verbal-abuse">
                                                Verbal Abuse
                                            </SelectItem>
                                            <SelectItem value="physical-abuse">
                                                Physical Abuse
                                            </SelectItem>
                                            <SelectItem value="cyberbullying">
                                                Cyberbullying
                                            </SelectItem>
                                            <SelectItem value="harassment">
                                                Harassment
                                            </SelectItem>
                                            <SelectItem value="intimidation">
                                                Intimidation
                                            </SelectItem>
                                            <SelectItem value="other">
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </div>
                        </FormtItem>/>
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-2">
                                <FormLabel htmlFor="location">
                                    Location of Incident
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="location"
                                        placeholder="Classroom, Hostel, Cafeteria, Library, etc."
                                    />
                                </FormControl>
                            </div>
                        </FormItem>/>
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-2">
                                <FormLabel htmlFor="description">
                                    Description of Incident
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        id="description"
                                        placeholder="Provide details about what happened"
                                        className="min-h-[150px]"
                                    />
                                </FormControl>
                            </div>
                        </FormItem>/>
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-2">
                                <FormLabel htmlFor="involved-parties">
                                    Involved Parties
                                </FormLabel>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select involved parties" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="student">
                                                Student
                                            </SelectItem>
                                            <SelectItem value="faculty">
                                                Faculty
                                            </SelectItem>
                                            <SelectItem value="staff">
                                                Staff Member
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </div>
                        </FormItem>/>
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-2">
                                <FormLabel htmlFor="severity">
                                    Severity of Incident
                                </FormLabel>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select severity of incident" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">
                                                Low
                                            </SelectItem>
                                            <SelectItem value="medium">
                                                Medium
                                            </SelectItem>
                                            <SelectItem value="high">
                                                High
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </div>
                        </FormItem>/>
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-2">
                                <FormLabel htmlFor="evidence">
                                    Supporting Evidence
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="evidence"
                                        type="url"
                                        placeholder="Link to files, images, or videos"
                                    />
                                </FormControl>
                            </div>
                        </FormItem>/>
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid gap-2">
                                <FormLabel htmlFor="preferred-action">
                                    Preferred Action
                                </FormLabel>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select preferred action" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="just-report">
                                                Just Report
                                            </SelectItem>
                                            <SelectItem value="require-attention">
                                                Require Immediate Attention
                                            </SelectItem>
                                            <SelectItem value="discuss-authorities">
                                                Want to Discuss with Authorities
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </div>
                        </FormItem>/>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button type="submit">File Complaint</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
}
