"use client";
import "./srcl.scss";

import { ModalProvider } from "@/components/srcl/page/srcl-modalcontext";
import React, { useEffect } from "react";
import * as Utilities from "@/lib/srcl-utilities";

import Accordion from "@/components/srcl/srcl-accordion";
import ActionListItem from "@/components/srcl/srcl-actionlistitem";
import Card from "@/components/srcl/srcl-card";
import DefaultLayout from "@/components/srcl/page/srcl-defaultlayout";
import Grid from "@/components/srcl/srcl-grid";
import ModalStack from "@/components/srcl/srcl-modalstack";
import Package from "../../../package.json";
import Badge from "@/components/srcl/srcl-badge";
import Row from "@/components/srcl/srcl-row";
import Navigation from "@/components/srcl/srcl-navigation";
import ActionButton from "@/components/srcl/srcl-actionbutton";
import ModalTrigger from "@/components/srcl/srcl-modaltrigger";
import ModalError from "@/components/srcl/modals/srcl-modalerror";
import ModalCreateAccount from "@/components/srcl/modals/srcl-modalcreateaccount";

export const dynamic = "force-static";

export default function Page() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
        if (!document.body.classList.contains("theme-dark")) {
          document.body.classList.add("theme-dark");
        }
      });

      Utilities.onHandleThemeChange("theme-dark");
    }
  }, []);

  return (
    <ModalProvider>
      <Navigation
        logo="✶"
        left={
          <ModalTrigger
            modal={ModalError}
            modalProps={{
              message: (
                <>
                  Non-fatal error detected: error FOOLISH (Please contact Sacred
                  Computer support.)
                </>
              ),
              title: `SETUP`,
            }}
          >
            <ActionButton>HOME</ActionButton>
          </ModalTrigger>
        }
      ></Navigation>
      <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
        <Grid>
          <Row>
            {Package.name.toUpperCase()} <Badge>{Package.version}</Badge>
          </Row>
          <Row>Projects and Experience</Row>
        </Grid>

        <Grid>
          {/* Featured Project */}
          <Accordion defaultValue={true} title="FEATURED PROJECT">
            <Card title="PERSONAL WEBSITE">
              A modern, responsive personal website built with Next.js and
              TypeScript. Features a custom design system and component library.
              <br />
              <br />
              <ActionListItem
                icon={`⭢`}
                href="https://github.com/yourusername/personal-website"
                target="_blank"
              >
                View source code
              </ActionListItem>
            </Card>
          </Accordion>

          {/* Other Projects */}
          <Accordion defaultValue={true} title="OTHER PROJECTS">
            <Card title="RITMO!">
              Ritmo! is your gateway to experiencing spatial gaming. Dive into a
              mesmerizing world where music meets movement; redefining
              entertainment on the Apple Vision Pro.
              <br />
              <br />
              Ritmo! is a musical rhythm game exclusively on the Apple Vision
              Pro. Users are able to choose any song in the Apple Music library
              (through personal subscription) to play along to. During gameplay,
              your physical reality is intertwined with the virtual space. Use
              only your hands, eyes, and ears to interact with 3D elements to
              the beat of your favorite song in a creatively immersive world.
              <br />
              <br />
              <ActionListItem
                icon={`⭢`}
                href="https://github.com/yourusername/ritmo"
                target="_blank"
              >
                View Project
              </ActionListItem>
            </Card>

            <Card title="RECIPE BOX">
              Recipe Box is a digital recipe-sharing platform built in
              TypeScript with Next.js and React that allows you to share all of
              your favorite recipes with friends and family.
              <br />
              <br />
              <ActionListItem
                icon={`⭢`}
                href="https://github.com/yourusername/recipe-box"
                target="_blank"
              >
                View Project
              </ActionListItem>
            </Card>
          </Accordion>

          {/* Skills */}
          <Accordion defaultValue={true} title="TECHNICAL SKILLS">
            <Card title="LANGUAGES & FRAMEWORKS">
              • Java
              <br /> • TypeScript/JavaScript
              <br />• React.js/Next.js
              <br />• HTML/CSS
              <br />• Python
              <br /> • Swift/SwiftUI
              <br />• C/C++
            </Card>
          </Accordion>

          {/* Links */}
          <Grid>
            <ActionListItem
              icon={`⭢`}
              href="https://github.com/aayork"
              target="_blank"
            >
              View my GitHub profile
            </ActionListItem>
            <ActionListItem
              icon={`⭢`}
              href="https://www.linkedin.com/in/aidan-york/"
              target="_blank"
            >
              Connect on LinkedIn
            </ActionListItem>
            <ActionListItem icon={`⭢`} href="/" target="_blank">
              Return to Home
            </ActionListItem>
          </Grid>
        </Grid>
        <ModalStack />
      </DefaultLayout>
    </ModalProvider>
  );
}
