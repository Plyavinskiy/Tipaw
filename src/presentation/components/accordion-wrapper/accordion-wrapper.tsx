import { AccordionItemState } from "react-accessible-accordion";
// assets
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as WhiteArrowDownIcon } from "../../../assets/icons/white-arrow-down.svg";
// types
import { FC } from "react";
import { AccordionWrapperProps } from "./accordion-wrapper.interfaces";
// styles
import {
  DateText,
  AccordionText,
  DateContainer,
  AccordionButton,
  AccordionHeading,
  AccordionContainer,
  AccordionItemContainer,
} from "./accordion-wrapper.styles";

const AccordionWrapper: FC<AccordionWrapperProps> = ({ announcements }) => (
  <AccordionContainer preExpanded={[announcements[0].id]} allowZeroExpanded>
    {announcements.map((announcement) => (
      <AccordionItemContainer key={announcement.id} uuid={announcement.id}>
        <AccordionItemState>
          {({ expanded }) => (
            <>
              <AccordionHeading
                className={`${!expanded && "accordionHeadingCollapsed"}`}
              >
                <AccordionButton>
                  <p>{announcement.title}</p>
                  <WhiteArrowDownIcon />
                </AccordionButton>
              </AccordionHeading>
              <AccordionText>
                <DateContainer>
                  <CalendarIcon />
                  <DateText>{announcement.date}</DateText>
                </DateContainer>
                <p>{announcement.content}</p>
              </AccordionText>
            </>
          )}
        </AccordionItemState>
      </AccordionItemContainer>
    ))}
  </AccordionContainer>
);

export default AccordionWrapper;
