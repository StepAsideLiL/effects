import TimelineDoc from "@/components/effects/docs/timeline-doc";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
} from "@/components/effects/timeline";
import { Doc } from "@/components/uis/docs-ui";

export default function Page() {
  return (
    <main>
      <Doc.componentPreviewContainer>
        <Timeline>
          <TimelineHeader>Header 1</TimelineHeader>
          <TimelineContent>This is header 1 content</TimelineContent>
          <TimelineHeader>Header 2</TimelineHeader>
          <TimelineContent>
            <p>This is header 2 content with multiple line</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              non quas odio ipsa ullam, odit harum facilis magni beatae?
              Voluptatem enim tempora esse accusantium assumenda delectus
              cupiditate distinctio id quos!
            </p>
          </TimelineContent>
        </Timeline>
      </Doc.componentPreviewContainer>

      <Doc.dialog>
        <TimelineDoc />
      </Doc.dialog>
    </main>
  );
}
