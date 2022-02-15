import React from 'react';
import { PropTypes } from 'prop-types';
import StyledHeaderDays from './styled/headerDays';
import { getFormattedDayName } from './helpers';
import StyledAbbrHeader from './styled/abbrHeader';

export default function DayOfWeek({ locale }) {
    const weekDays = [
        new Date(2022, 1, 14),
        new Date(2022, 1, 15),
        new Date(2022, 1, 16),
        new Date(2022, 1, 17),
        new Date(2022, 1, 18),
        new Date(2022, 1, 19),
        new Date(2022, 1, 20),
    ];

    return (
        <thead>
            <tr>
                {weekDays.map(weekDay => (
                    <StyledHeaderDays key={weekDay.toISOString()} scope="col">
                        <StyledAbbrHeader title={getFormattedDayName(weekDay, 'long', locale)}>
                            {getFormattedDayName(weekDay, 'short', locale)}
                        </StyledAbbrHeader>
                    </StyledHeaderDays>
                ))}
            </tr>
        </thead>
    );
}

DayOfWeek.propTypes = {
    locale: PropTypes.string,
};

DayOfWeek.defaultProps = {
    locale: undefined,
};
