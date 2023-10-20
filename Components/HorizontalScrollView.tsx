import { ScrollView } from "react-native";

interface HorizontalScrollViewProps {
  children: any;
}

export default function HorizontalScrollView(props: HorizontalScrollViewProps) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {props.children}
    </ScrollView>
  );
}
