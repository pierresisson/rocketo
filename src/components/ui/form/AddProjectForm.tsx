"use client";

import { useState } from "react";
import { CalendarIcon, GiftIcon, InfoIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectRegistrationForm() {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [launchDate, setLaunchDate] = useState<Date>();
    const [rewardId, setRewardId] = useState("");
    const [rewardDescription, setRewardDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            projectName,
            projectDescription,
            launchDate,
            rewardId,
            rewardDescription,
        });
    };

    return (
        <div className="mt-5">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                        Register Your SaaS Project
                    </CardTitle>
                    <CardDescription className="text-lg">
                        Add your project details to get started with our
                        platform.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="projectName" className="text-lg">
                                Project Name
                            </Label>
                            <Input
                                id="projectName"
                                placeholder="Enter your project name"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                required
                                className="text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="projectDescription"
                                className="text-lg"
                            >
                                Project Description
                            </Label>
                            <Textarea
                                id="projectDescription"
                                placeholder="Describe your project in a few sentences"
                                value={projectDescription}
                                onChange={(e) =>
                                    setProjectDescription(e.target.value)
                                }
                                required
                                className="text-lg min-h-[100px]"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="launchDate" className="text-lg">
                                Expected Launch Date
                            </Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal text-lg",
                                            !launchDate &&
                                                "text-muted-foreground",
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-5 w-5" />
                                        {launchDate
                                            ? format(launchDate, "PPP")
                                            : "Select a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={launchDate}
                                        onSelect={setLaunchDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="rewardId"
                                className="text-lg flex items-center"
                            >
                                Reward ID
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <InfoIcon className="ml-2 h-5 w-5 text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                Enter a unique identifier for
                                                your project&apos;s reward
                                                system
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Label>
                            <Input
                                id="rewardId"
                                placeholder="e.g., REWARD-123"
                                value={rewardId}
                                onChange={(e) => setRewardId(e.target.value)}
                                required
                                className="text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="rewardDescription"
                                className="text-lg"
                            >
                                Reward Description
                            </Label>
                            <Textarea
                                id="rewardDescription"
                                placeholder="Describe the rewards for your project"
                                value={rewardDescription}
                                onChange={(e) =>
                                    setRewardDescription(e.target.value)
                                }
                                required
                                className="text-lg min-h-[100px]"
                            />
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full text-lg font-semibold"
                        onClick={handleSubmit}
                    >
                        <GiftIcon className="mr-2 h-5 w-5" />
                        Register Project
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
