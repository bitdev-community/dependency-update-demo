import React from 'react';
import { Card } from './card';

export const CardWithNoSubtitle = () => {
  return (
    <Card
      title="Project Name"
      tags={['React', 'VSCode', 'Bit', 'Material-UI']}
      bannerImage="https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    />
  );
}

export const CardWithNoSubtitleNoTags = () => {
  return (
    <Card
      title="Project Name"
      bannerImage="https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    />
  );
}

export const CompactCard = () => {
  return (
    <Card
      title="Project Name"
      tags={['React', 'VSCode', 'Bit', 'Material-UI']}
      subtitle="This is a subtitle"
      view='compact'
      bannerImage="https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    />
  );
}

export const DetailedCard = () => {
  return (
    <Card
      title="Project Name"
      tags={['React', 'VSCode', 'Bit', 'Material-UI']}
      subtitle="This is a subtitle"
      view='detailed'
      bannerImage="https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    />
  );
}