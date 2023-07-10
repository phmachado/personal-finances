import React from "react";
import { StyleSheet, View } from "react-native";
import currencyFormatter from "currency-formatter";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import In from "../../../assets/svgs/in.svg";
import Out from "../../../assets/svgs/out.svg";
import Total from "../../../assets/svgs/total.svg";
import theme from "../../theme";
import TextField from "../TextField";

interface CardProps {
  label: string;
  operation: string;
  value: string | undefined;
  date?: 0 | Date | undefined;
  dateRange?: { latestDate: 0 | Date; firstDate: 0 | Date };
}

export default function OverviewCard({
  label,
  operation,
  value,
  date,
  dateRange,
}: CardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TextField text={label} color={theme.colors.title} />
        {(() => {
          switch (operation) {
            case "in":
              return <In height={40} width={40} />;
            case "out":
              return <Out height={40} width={40} />;
            case "total":
              return <Total height={40} width={40} />;
            default:
              return null;
          }
        })()}
      </View>
      <View style={styles.content}>
        <TextField
          text={currencyFormatter.format(Number(value), { locale: "pt-BR" })}
          fontSize={30}
          color={theme.colors.title}
        />
        {dateRange ? (
          <>
            {typeof dateRange.firstDate !== "number" &&
              typeof dateRange.latestDate !== "number" && (
                <TextField
                  text={String(
                    format(new Date(dateRange.firstDate), "dd 'de' MMMM", {
                      locale: ptBR,
                    }) +
                      " à " +
                      format(new Date(dateRange.latestDate), "dd 'de' MMMM", {
                        locale: ptBR,
                      })
                  )}
                  fontSize={12}
                />
              )}
          </>
        ) : (
          <>
            {typeof date !== "number" && (
              <TextField
                text={String(
                  ` Última ${operation === "in" ? "entrada" : "saída"} dia ` +
                    format(date ? new Date(date) : new Date(), "dd 'de' MMMM", {
                      locale: ptBR,
                    })
                )}
                fontSize={12}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    width: 300,
    height: 200,
    backgroundColor: theme.colors.light,
    marginRight: 16,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  content: {
    marginTop: 35,
  },
});
