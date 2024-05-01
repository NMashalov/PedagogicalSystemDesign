import { VStack, Text } from "@chakra-ui/react";
export function ContextMenu(){
    return (
        <VStack style={{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}>
            <Text>
                Открыть карту
            </Text>
            <Text>
                Удалить
            </Text>
            <Text>
                Копировать
            </Text>
        </VStack>
    )
}