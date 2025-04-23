import { useState } from "react";
import {
  AccordionContainer,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  TitleContent,
} from "./Accordion.styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type AccordionData = {
  title: string;
  content: string;
};

type Props = {
  items: AccordionData[];
};

const Accordion = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <AccordionItem key={index}>
            <AccordionTitle onClick={() => toggleIndex(index)} isOpen={isOpen}>
              <TitleContent>
                <span>{item.title}</span>
                {isOpen ? <IoIosArrowUp size={22} /> : <IoIosArrowDown size={22} />}
              </TitleContent>
            </AccordionTitle>

            {isOpen && <AccordionContent>{item.content}</AccordionContent>}
          </AccordionItem>
        );
      })}
    </AccordionContainer>
  );
};

export default Accordion;
