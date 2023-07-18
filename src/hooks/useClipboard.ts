import { useState } from "react";

export default function useClipboard() {
  const [value, setValue] = useState<string | undefined>(undefined);
  function copy(val: string, cb?: () => void) {
    window?.navigator.clipboard
      .writeText(val)
      .then(() => {
        setValue(val);
        cb && cb();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return { value, copy } as const;
}
