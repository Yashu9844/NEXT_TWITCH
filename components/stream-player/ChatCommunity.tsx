"use client"

import { useParticipants } from "@livekit/components-react";
import { useMemo, useState, useEffect } from "react";
import { debounce } from "lodash";
import { Input } from "../ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import CommunityItem from "./CommunityItem";
import { LocalParticipant, RemoteParticipant } from "livekit-client";

interface ChatCommunityProps {
  isHidden: boolean;
  viewerName: string;
  hostName: string;
}

const ChatCommunity = ({
  isHidden,
  viewerName,
  hostName,
}: ChatCommunityProps) => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const participants = useParticipants();

  // Create a debounced function
  const debouncedSearch = useMemo(() => {
    return debounce((nextValue: string) => {
      setDebouncedValue(nextValue);
    }, 500);
  }, []);

  // Update the debounced value when `value` changes
  useEffect(() => {
    debouncedSearch(value);
    return () => {
      debouncedSearch.cancel(); // Clean up the debounce on unmount or value change
    };
  }, [value, debouncedSearch]);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  if (isHidden) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-muted-foreground">Community is disabled</p>
      </div>
    );
  }

  const filteredParticipant = useMemo(() => {
    const deduped = participants.reduce(
      (acc, participant) => {
        const hostAsViewer = `host-${participant.identity}`;
        if (!acc.some((p) => p.identity === hostAsViewer)) {
          acc.push(participant);
        }
        return acc;
      },
      [] as (RemoteParticipant | LocalParticipant)[]
    );

    const searchValue =
      typeof debouncedValue === "string" ? debouncedValue.toLowerCase() : "";

    console.log("Search Input Value:", value);
    console.log("Debounced Value:", debouncedValue);

    return deduped.filter((participant) => {
      return participant.name?.toLowerCase().includes(searchValue);
    });
  }, [participants, debouncedValue]);

  return (
    <div className="p-4">
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Community..."
        className="border-white/10"
      />
       <ScrollArea className="gap-y-2 mt-4">
        <p className="text-center text-sm text-muted-foreground hidden last:block p-2">
          No results
        </p>
        {filteredParticipant.map((participant) => (
          <CommunityItem
            key={participant.identity}
            hostName={hostName}
            viewerName={viewerName}
            participantName={participant.name}
            participantIdentity={participant.identity}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default ChatCommunity;
