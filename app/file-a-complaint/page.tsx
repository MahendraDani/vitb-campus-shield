"use client";
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
import { FormEvent, useState } from "react";

export default function Component() {
  const [saving, setSaving] = useState(false);
  async function hanldeReport(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    const formData = new FormData(e.currentTarget);
    const abuse = formData.get("abuse");
    const action = formData.get("action");
    const description = formData.get("description");
    const evidenceLink = formData.get("evidenceLink");
    const location = formData.get("location");
    const parties = formData.get("parties");
    const severity = formData.get("severity");
    const title = formData.get("title");
    console.log(abuse);
    console.log(action);
    console.log(description);
    console.log(evidenceLink);
    console.log(location);
    console.log(parties);
    console.log(severity);
    console.log(title);

    // alert("I am working");
    const res = await fetch(`/api/report`, {
      method: "POST",
      body: JSON.stringify({
        abuse,
        action,
        description,
        evidenceLink,
        location,
        parties,
        severity,
        title,
      }),
    });
    if (!res.ok) {
      setSaving(false);
    }
    const response = await res.json();
    console.log(response);
    setSaving(false);
  }

  return (
    <form onSubmit={hanldeReport}>
      <fieldset disabled={saving}>
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>File a Complaint</CardTitle>
            <CardDescription>
              Use this form to report an incident and request appropriate
              action.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="title">Title</label>
              <Textarea
                id="title"
                name="title"
                placeholder="Briefly describe the incident"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="incident-type">Type of Incident</label>
              <Select name="abuse">
                <SelectTrigger>
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verbal-abuse">Verbal Abuse</SelectItem>
                  <SelectItem value="physical-abuse">Physical Abuse</SelectItem>
                  <SelectItem value="cyberbullying">Cyberbullying</SelectItem>
                  <SelectItem value="harassment">Harassment</SelectItem>
                  <SelectItem value="intimidation">Intimidation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="location">Location of Incident</label>
              <Input
                id="location"
                name="location"
                placeholder="Classroom, Hostel, Cafeteria, Library, etc."
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description">Description of Incident</label>
              <Textarea
                name="description"
                id="description"
                placeholder="Provide details about what happened"
                className="min-h-[150px]"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="involved-parties">Involved Parties</label>
              <Select name="parties">
                <SelectTrigger>
                  <SelectValue placeholder="Select involved parties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="staff">Staff Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="severity">Severity of Incident</label>

              <Select name="severity">
                <SelectTrigger>
                  <SelectValue placeholder="Select severity of incident" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="evidence">Supporting Evidence</label>
              <Input
                name="evidenceLink"
                id="evidence"
                type="url"
                placeholder="Link to files, images, or videos"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="preferred-action">Preferred Action</label>
              <Select name="action">
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="just-report">Just Report</SelectItem>
                  <SelectItem value="require-attention">
                    Require Immediate Attention
                  </SelectItem>
                  <SelectItem value="discuss-authorities">
                    Want to Discuss with Authorities
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">
              {saving ? "Submitting..." : "File a Complaint"}
            </Button>
          </CardFooter>
        </Card>
      </fieldset>
    </form>
  );
}
