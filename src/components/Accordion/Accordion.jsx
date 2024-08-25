import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails as MuiAccordionDetails, Typography } from '@mui/material';

const CustomAccordion = styled((props) => (
    <MuiAccordion elevation={1} square {...props} />
))(() => ({
    '&:before': {
        display: 'none',
    },
    '&:not(:last-of-type)': {
        marginBottom: 20,
    },
}));

const CustomAccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddCircleOutlineIcon sx={{ color: '#1B3C74' }} />}
        {...props}
    />
))(() => ({
    backgroundColor: 'transparent',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 8,
    },
}));

const CustomAccordionDetails = styled(MuiAccordionDetails)(() => ({
    paddingTop: 0,
    paddingBottom: 16,
}));

const AccordionComponent = ({ data }) => {
    const [expandedPanel, setExpandedPanel] = useState(null);

    const handlePanelChange = (panel) => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : null);
    };

    return (
        <div>
            {data.map((item, idx) => (
                <CustomAccordion
                    key={idx}
                    expanded={expandedPanel === `panel${idx}`}
                    onChange={handlePanelChange(`panel${idx}`)}
                >
                    <CustomAccordionSummary aria-controls={`panel${idx}-content`} id={`panel${idx}-header`}>
                        <Typography variant="h6" color="primary" gutterBottom>
                            {item.question}
                        </Typography>
                    </CustomAccordionSummary>
                    <CustomAccordionDetails>
                        <Typography variant="body2" color="textSecondary">
                            {item.answer}
                        </Typography>
                    </CustomAccordionDetails>
                </CustomAccordion>
            ))}
        </div>
    );
};

export default AccordionComponent;
