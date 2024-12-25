"use client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import PageLayout from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <Body />
    </PageLayout>
  );
}
