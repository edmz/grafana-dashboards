import { css } from 'emotion';
import { GrafanaTheme } from '@grafana/data';
import { stylesFactory } from '@grafana/ui';

export const getStyles = stylesFactory((theme: GrafanaTheme) => ({
  legend: css`
    color: ${(theme.colors as any).formLegend};
    font-size: ${theme.typography.heading.h3};
    font-weight: ${theme.typography.weight.regular};
    margin: ${(theme.spacing as any).formLegendMargin};
    text-align: center;
  `,
  link: css`
    font-size: 1em;
    height: 1em;
    padding: 0;
    vertical-align: baseline;
  `,
  checkboxWrapper: css`
    label {
      text-align: left
    }
  `,
  checkboxLabel: css`
    display: inline-block;
    line-height: 1.7;
    padding-right: 8px;
  `,
  formWrapper: css`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-right: 60px;
  `,
  form: css`
    max-width: 300px;
    width: 100%;
  `,
  submitButton: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `
}));
