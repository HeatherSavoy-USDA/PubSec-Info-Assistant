// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "What ARS research is being done about fungicide?", value: "What ARS research is being done about fungicide?" },
    { text: "Describe ARS rangelands research in one paragraph.", value: "Describe ARS rangelands research in one paragraph." },
    { text: "List ARS research units that study livestock genomics.", value: "List ARS research units that study livestock genomics." }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
