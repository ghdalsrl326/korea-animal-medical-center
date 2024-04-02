/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const useFont = (fontFamily: string) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      await Font.register({
        family: "NanumGothic",
        src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf",
      });
      await Font.load({ fontFamily: fontFamily });
      const timer = setInterval(() => {
        if (Font.getFont({ fontFamily: fontFamily })?.loading === false) {
          clearInterval(timer);
          setLoaded(true);
        }
      }, 100);
    })();
  }, []);
  return loaded;
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    // fontFamily: "NanumGothic",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    // fontFamily: "NanumGothic",
  },
});

const HealthExamResultPDF = () => {
  const isFontLoaded = useFont("NanumGothic");

  if (!isFontLoaded) {
    return <div>Loading Fonts...</div>;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>건강검진결과</Text>
        </View>
        <View style={styles.section}>
          <Text>방사선검사결과</Text>
        </View>
      </Page>
    </Document>
  );
};

export default HealthExamResultPDF;
