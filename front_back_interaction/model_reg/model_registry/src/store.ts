import { create } from 'zustand'

// enum ModelType{
//   torch= 'torch',
//   catboost='catboost'
// }

export type TreeItem = {
  id: string,
  name: string
  children?: TreeItem[]
}


export const modelTwoBranches: TreeItem[] = [
  { id: "1", name: "" },
  { id: "2", name: "Threads" },
  {
    id: "3",
    name: "Sport",
    children: [
      { id: "c1", name: "Football" },
      { id: "c2", name: "Basketball" },
    ]
  },
  {
    id: "4",
    name: "NLP",
    children: [
      { id: "d1", name: "News" },
      { id: "d2", name: "Letters" },
    ]
  }
];

export const strategyTwoBranches: TreeItem[] = [
  { id: "1", name: "Streaming" },
  { id: "2", name: "Gambling" },
];


type ItemsState = {
  modelTree: TreeItem[],
  searchTerm: string,
  materializedId: string[]
}

type ItemsAction = {
  countModels: () => number
  setTerm: (term: string) => void
  addMaterializedId: (id: string) => void
}


export const useItemsStore = create<ItemsState & ItemsAction>((set,get) => ({
  modelTree: modelTwoBranches,
  searchTerm: '',
  materializedId: ['1'],
  countModels: () => get().modelTree.length,
  setTerm: (term) => set({searchTerm: term}),
  addMaterializedId: (id) => set({materializedId: [...get().materializedId,id]})
}))


type StrategyState = {
  strategyTree: TreeItem[] 
}

type StrategyAction = {
  strategyCount: () => number
}


export const useStrategyStore = create<StrategyState & StrategyAction>((set,get) => ({
  strategyTree: strategyTwoBranches,
  strategyCount: () => get().strategyTree.length
}))
