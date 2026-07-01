import { ResolveFn } from "@angular/router";
import { LAB_ENTRIES } from "../lab/lab-data/lab-data";

export const labEntryTitleResolver: ResolveFn<string> = (route) => {
  const id = route.paramMap.get('id');
  const entry = LAB_ENTRIES.find(e => e.id === id);
  return entry ? `${entry.title} — Elian Meaca` : 'Lab — Elian Meaca';
};

export const labEntryDescriptionResolver: ResolveFn<string> = (route) => {
  const id = route.paramMap.get('id');
  const entry = LAB_ENTRIES.find(e => e.id === id);
  return entry?.caption ?? 'A lab entry on Elian Meaca\'s portfolio.'
}