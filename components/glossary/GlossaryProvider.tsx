'use client';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type {
  GlossaryFilter,
  GlossaryGroup,
} from "@/lib/glossary/types";
import { buildGlossaryGroups } from "@/lib/glossary/utils";

type GlossaryProviderProps = {
  terms: string[];
  children: ReactNode;
};

type GlossaryContextValue = {
  activeFilter: GlossaryFilter;
  setActiveFilter: (value: GlossaryFilter) => void;
  groups: GlossaryGroup[];
  filteredGroups: GlossaryGroup[];
  totalCount: number;
};

const GlossaryContext = createContext<GlossaryContextValue | null>(null);

export function GlossaryProvider({ terms, children }: GlossaryProviderProps) {
  const [activeFilter, setActiveFilter] = useState<GlossaryFilter>("All");

  const groups = useMemo(() => buildGlossaryGroups(terms), [terms]);

  const filteredGroups = useMemo(() => {
    if (activeFilter === "All") {
      return groups.filter((group) => group.terms.length > 0);
    }

    return groups.filter(
      (group) => group.label === activeFilter && group.terms.length > 0,
    );
  }, [activeFilter, groups]);

  const totalCount = useMemo(() => {
    if (activeFilter === "All") {
      return groups.reduce((sum, group) => sum + group.terms.length, 0);
    }

    return (
      groups.find((group) => group.label === activeFilter)?.terms.length ?? 0
    );
  }, [activeFilter, groups]);

  const value: GlossaryContextValue = {
    activeFilter,
    setActiveFilter,
    groups,
    filteredGroups,
    totalCount,
  };

  return (
    <GlossaryContext.Provider value={value}>
      {children}
    </GlossaryContext.Provider>
  );
}

export function useGlossary() {
  const context = useContext(GlossaryContext);

  if (!context) {
    throw new Error("useGlossary must be used within a GlossaryProvider");
  }

  return context;
}
