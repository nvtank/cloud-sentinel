// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import * as S from '../styles/Home.styled';
import { useQuery } from '@tanstack/react-query';
import ApiGateway from '../gateways/Api.gateway';
import Banner from '../components/Banner';
import { CypressFields } from '../utils/enums/CypressFields';
import { useCurrency } from '../providers/Currency.provider';

const Home: NextPage = () => {
  const { selectedCurrency } = useCurrency();
  const { data: productList = [] } = useQuery({
    queryKey: ['products', selectedCurrency],
    queryFn: () => ApiGateway.listProducts(selectedCurrency),
  });

  return (
    <Layout>
      <Head>
        <title>TechX Observatory Supply</title>
        <meta name="description" content="Field-tested telescopes, optics, and accessories for curious observers." />
      </Head>
      <S.Home data-cy={CypressFields.HomePage}>
        <Banner />
        <S.Container>
          <S.Row>
            <S.Content>
              <S.HotProducts>
                <S.SectionHeader id="hot-products">
                  <div>
                    <S.Eyebrow>Curated essentials</S.Eyebrow>
                    <S.HotProductsTitle data-cy={CypressFields.HotProducts}>
                      Gear for your next discovery
                    </S.HotProductsTitle>
                  </div>
                  <S.SectionCopy>
                    From first light to deep-sky sessions, every piece is selected for clarity, reliability, and wonder.
                  </S.SectionCopy>
                </S.SectionHeader>
                <ProductList productList={productList} />
              </S.HotProducts>
            </S.Content>
          </S.Row>
        </S.Container>
        <S.Standard id="our-standard">
          <S.StandardIntro>
            <S.Eyebrow>Our standard</S.Eyebrow>
            <S.StandardTitle>Serious equipment. Human guidance.</S.StandardTitle>
          </S.StandardIntro>
          <S.StandardGrid>
            <S.StandardItem><span>01</span><strong>Expert selected</strong><p>Only equipment we would confidently use in the field.</p></S.StandardItem>
            <S.StandardItem><span>02</span><strong>Built to last</strong><p>Reliable tools designed for years of nights under open skies.</p></S.StandardItem>
            <S.StandardItem><span>03</span><strong>AI-assisted choice</strong><p>Ask our shopping copilot for a recommendation tailored to you.</p></S.StandardItem>
          </S.StandardGrid>
        </S.Standard>
      </S.Home>
    </Layout>
  );
};

export default Home;
