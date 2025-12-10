import { faker } from "@faker-js/faker"

export interface Lead {
  id: string
  name: string
  company: string
  email: string
  phone: string
  status: "new" | "contacted" | "qualified" | "converted"
  value: number
  createdAt: Date
}

export interface Deal {
  id: string
  title: string
  company: string
  value: number
  stage: "prospecting" | "qualification" | "proposal" | "negotiation" | "closed"
  probability: number
  expectedCloseDate: Date
}

export function generateLeads(count: number = 10): Lead[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    company: faker.company.name(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    status: faker.helpers.arrayElement([
      "new",
      "contacted",
      "qualified",
      "converted",
    ]) as Lead["status"],
    value: faker.number.int({ min: 1000, max: 100000 }),
    createdAt: faker.date.recent({ days: 30 }),
  }))
}

export function generateDeals(count: number = 10): Deal[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    company: faker.company.name(),
    value: faker.number.int({ min: 5000, max: 500000 }),
    stage: faker.helpers.arrayElement([
      "prospecting",
      "qualification",
      "proposal",
      "negotiation",
      "closed",
    ]) as Deal["stage"],
    probability: faker.number.int({ min: 10, max: 100 }),
    expectedCloseDate: faker.date.future({ years: 1 }),
  }))
}

