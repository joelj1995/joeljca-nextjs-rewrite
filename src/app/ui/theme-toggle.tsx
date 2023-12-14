"use client";
import { getTheme, setTheme } from "@/lib/services/theme";
import { ChangeEvent, useEffect, useState } from "react";

export default function ThemeToggle() {

  const [curTheme, setCurTheme] = useState<string|null>(null);

  useEffect(() => {
    if (!curTheme) {
      setCurTheme(getTheme());
    }
  }, [curTheme]);

  const switchTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = curTheme === 'dark' ? 'light': 'dark';
    setCurTheme(newTheme);
    setTheme(newTheme);
  }

  return (
    <div className="pe-lg-1 ms-auto me-4" data-bs-theme="dark">
      <div className="form-check form-switch mode-switch" data-bs-toggle="mode">

        <input
          type="checkbox"
          className="form-check-input"
          id="theme-mode"
          checked={curTheme === 'dark'}
          onChange={switchTheme}>
        </input>

        <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">
          Light
        </label>
        <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">
          Dark
        </label>

      </div>
    </div>
  );
}