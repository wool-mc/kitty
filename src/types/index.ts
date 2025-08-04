export interface Kitty {
  id: string;
  url: string;
}


interface ImportMetaEnv {
  readonly API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}