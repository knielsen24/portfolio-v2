"use client"
import Link from "next/link";
import { SimpleLayout } from "@/components/SimpleLayout";
import UnderConstruction from "@/components/UnderConstruction";
import { ArrowTopRightOnSquare } from "@/components/icons/Project";
import SlideOverTransition from "@/components/SlideOverTransition";


const isUnderConstruction = false;

export default function Playground() {
  return (
    <>
      {isUnderConstruction ? (
        <UnderConstruction />
      ) : (
        <SimpleLayout
          title="Welcome to the playground"
          intro="The place where imagination meets reality."
        >
          <div>
            test
          </div>
          {/* <SlideOverTransition>
            <div className="h-20 bg-red-500 border border-red-600">test</div>
          </SlideOverTransition> */}
          
        </SimpleLayout>
      )}
    </>
  );
}
