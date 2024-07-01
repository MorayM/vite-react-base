/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EXAMPLE_VARIABLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}